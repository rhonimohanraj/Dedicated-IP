#!/bin/bash

# Install packages
apt-get update
apt-get upgrade -y
apt-get install -y curl iptables wireguard whois debian-keyring debian-archive-keyring apt-transport-https

# Write files

cat > /etc/systemd/system/wireguard-ui.service << EOF
[Unit]
Description=WireGuard UI
After=network.target

[Service]
Type=simple
WorkingDirectory=/usr/local/bin/wireguard-ui
EnvironmentFile=/usr/local/bin/wireguard-ui/.env
ExecStart=/usr/local/bin/wireguard-ui/wireguard-ui -bind-address [::1]:5000
Restart=on-failure

[Install]
WantedBy=multi-user.target
EOF
chmod 0644 /etc/systemd/system/wireguard-ui.service

cat > /etc/systemd/system/wg-watcher.service << EOF
[Unit]
Description=Watch WireGuard wg0 interface
After=network.target

[Service]
ExecStart=/usr/bin/systemctl restart wg-quick@wg0.service
Restart=on-failure

[Install]
WantedBy=multi-user.target
RequiredBy=wg-watcher.path
EOF
chmod 0644 /etc/systemd/system/wg-watcher.service

cat > /etc/systemd/system/wg-watcher.path << EOF
[Unit]
Description=Path Watcher for WireGuard Configurations

[Path]
PathModified=/etc/wireguard/wg0.conf

[Install]
WantedBy=multi-user.target
EOF
chmod 0644 /etc/systemd/system/wg-watcher.path

mkdir -p /etc/caddy

cat > /etc/caddy/Caddyfile << EOF
{
  email \${ssl_email}
}
\${domain_name} {
    reverse_proxy localhost:5000
}
EOF
chmod 0644 /etc/caddy/Caddyfile

mkdir -p /usr/local/bin/wireguard-ui

cat > /usr/local/bin/wireguard-ui/.env << EOF
# Default configuration for wireguard-ui.
# This file is loaded by the wireguard-ui systemd service.
#
# Please note, that most of these settings have no affect after the initial start of wireguard-ui.
# After that, wireguard-ui stores these settings in its own db and you can change them through the UI (or manually in the db) only.

# Used to encrypt the session cookies. Should be a random key, 32 characters long.
SESSION_SECRET=\$session_secret

# The login credentials for initial configuration.
WGUI_USERNAME=\$admin_username
WGUI_PASSWORD_HASH=\$admin_password_hash

# The default endpoint address used in the global settings.
WGUI_ENDPOINT_ADDRESS=\$domain

# The default endpoint port used in the global settings.
WGUI_SERVER_LISTEN_PORT=51822

# The default endpoint save config used in the global settings.
WGUI_ENDPOINT_SAVE_CONFIG=1

WGUI_SERVER_POST_UP_SCRIPT=/usr/local/bin/wireguard-ui/postup.sh
WGUI_SERVER_POST_DOWN_SCRIPT=/usr/local/bin/wireguard-ui/postdown.sh

# Telegram bot settings
TELEGRAM_TOKEN=\${telegram_token}
TELEGRAM_ALLOW_CONF_REQUEST=\${telegram_allow_conf_request}

# Email settings
SENDGRID_API_KEY=\${sendgrid_api}
EMAIL_FROM_ADDRESS=\${email_from_address}
EMAIL_FROM_NAME=\${email_from_name}
EOF
chmod 0644 /usr/local/bin/wireguard-ui/.env

cat > /usr/local/bin/wireguard-ui/postup.sh << EOF
#!/usr/bin/bash
ufw route allow in on wg0 out on eth0
iptables -t nat -I POSTROUTING -o eth0 -j MASQUERADE
EOF
chmod 0755 /usr/local/bin/wireguard-ui/postup.sh

cat > /usr/local/bin/wireguard-ui/postdown.sh << EOF
#!/usr/bin/bash
ufw route delete allow in on wg0 out on eth0
iptables -t nat -D POSTROUTING -o eth0 -j MASQUERADE
EOF
chmod 0755 /usr/local/bin/wireguard-ui/postdown.sh

# Run commands

set -e

# Prepare Workspace
# Generate wireguard-ui session secret (16 bytes, 32 characters)
session_secret=$(openssl rand -hex 16)
sed -i "s/\$session_secret/$session_secret/g" /usr/local/bin/wireguard-ui/.env
# Set the admin username and password
username="${admin_panel_username}"
sed -i "s/\$admin_username/$username/g" /usr/local/bin/wireguard-ui/.env
# Hash password and encode it again with base64 to be compatible with the format wireguard-ui requires

password="${admin_panel_password}"
password_hash=$(mkpasswd --method=bcrypt "$password" | tr -d '\n' | openssl base64 -A | sed 's/\//\\\//g')
sed -i "s/\$admin_password_hash/$password_hash/g" /usr/local/bin/wireguard-ui/.env
# Set the domain name
sed -i "s/\$domain/\${domain_name}/g" /usr/local/bin/wireguard-ui/.env
# End prepare workspace

# Download the given version of wireguard-ui
wget "https://github.com/ngoduykhanh/wireguard-ui/releases/download/v${wireguard_ui_version}/wireguard-ui-v${wireguard_ui_version}-linux-amd64.tar.gz" -O /tmp/wireguard-ui.tar.gz
# Unpack wireguard-ui
mkdir -p /usr/local/bin/wireguard-ui
tar --skip-old-files -C /usr/local/bin/wireguard-ui -xzf /tmp/wireguard-ui.tar.gz wireguard-ui
# Create the data directory
mkdir -p /usr/local/share/wireguard-ui
# Download the given version of caddy

curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | gpg --batch --yes --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | tee /etc/apt/sources.list.d/caddy-stable.list
apt update
apt-get install -y caddy -o Dpkg::Options::="--force-confold"
# Start wireguard-ui and caddy
systemctl enable wireguard-ui.service caddy.service
systemctl start wireguard-ui.service caddy.service
until [ -f /etc/wireguard/wg0.conf ]
do
  sleep 0.1
done
sleep 0.1
# Start wireguard and watch for config changes
systemctl enable wg-quick@wg0.service
systemctl start wg-quick@wg0.service
systemctl enable wg-watcher.path
systemctl enable wg-watcher.service
systemctl start wg-watcher.path
systemctl start wg-watcher.service
# Enable the firewall
ufw allow OpenSSH
ufw allow 80 comment "allow HTTP"
ufw allow 443 comment "allow HTTPS"
ufw allow proto udp to any port 443  comment "allow QUIC"
ufw allow proto udp to any port 51822 comment "WireGuard listen port"
ufw enable
ufw reload
# Enable IP forwarding
sed -i '/net.ipv4.ip_forward=1/s/^#//g' /etc/sysctl.conf
sed -i '/net.ipv6.conf.all.forwarding=1/s/^#//g' /etc/sysctl.conf
sysctl -p
reboot