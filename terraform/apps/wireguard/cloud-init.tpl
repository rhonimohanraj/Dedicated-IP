#cloud-config
package_update: true
package_upgrade: false
packages:
  - wireguard
  - curl
  - apt-transport-https
  - ca-certificates
  - gnupg
  - lsb-release

write_files:
  - path: /etc/systemd/system/wireguard-ui.service
    permissions: '0644'
    content: |
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
  
  - path: /etc/systemd/system/wg-watcher.service
    permissions: '0644'
    content: |
      [Unit]
      Description=Watch WireGuard wg0 interface
      After=network.target

      [Service]
      ExecStart=/usr/bin/systemctl restart wg-quick@wg0.service
      Restart=on-failure

      [Install]
      WantedBy=multi-user.target
      RequiredBy=wg-watcher.path

  - path: /etc/systemd/system/wg-watcher.path
    permissions: '0644'
    content: |
      [Unit]
      Description=Path Watcher for WireGuard Configurations

      [Path]
      PathModified=/etc/wireguard/wg0.conf

      [Install]
      WantedBy=multi-user.target

  - path: /etc/caddy/Caddyfile
    permissions: '0644'
    content: |
      {
        email ${ssl_email}
      }
      ${domain_name} {
          reverse_proxy localhost:5000
      }

  - path: /etc/systemd/system/nftables.conf
    permissions: '0644'
    content: |
      #!/usr/sbin/nft -f

      flush ruleset

      table inet filter {
          chain input {
              type filter hook input priority 0;
          }
          chain forward {
              type filter hook forward priority 0; policy drop;

              # Clamp TCP MSS because there are to many sites that drop ICMP, so we can't rely on PMTUD to work...
              # MTU 1300 - 40 byte (IPv6 header) - 20 byte (TCP header) = MSS 1240
              oifname "wg0" tcp flags syn tcp option maxseg size set 1240
              iifname "wg0" tcp flags syn tcp option maxseg size set 1240

              # Allow related traffic
              ct state related,established accept
              ct state invalid drop

              # Allow the VPN to reach the public and private networks
              iifname "wg0" accept

              # Allow all ICMPv6 traffic
              meta l4proto icmpv6 accept
          }
          chain output {
              type filter hook output priority 0;
          }
      }

      table ip ipv4_nat {
          chain prerouting {
              type nat hook prerouting priority -100;
          }
          chain postrouting {
              type nat hook postrouting priority 100;

              # Masquerade outgoing IPv4 traffic from the VPN
              # If NAT is only wanted for public network traffic, you can add an `oifname "eth0"` here.
              iifname "wg0" masquerade
          }
      }

  - path: /usr/local/bin/wireguard-ui/.env
    permissions: '0644'
    content: |
          # Default configuration for wireguard-ui.
          # This file is loaded by the wireguard-ui systemd service.
          #
          # Please note, that most of these settings have no affect after the initial start of wireguard-ui.
          # After that, wireguard-ui stores these settings in its own db and you can change them through the UI (or manually in the db) only.

          # Set this variable if you run wireguard-ui under a subpath of your reverse proxy virtual host.
          #BASE_PATH=/wireguard

          # The addresses where wireguard-ui should bind on.
          #BIND_ADDRESS=0.0.0.0:5000

          # Used to encrypt the session cookies. Should be a random key, 32 characters long.
          SESSION_SECRET=$session_secret

          # The login credentials for initial configuration.
          WGUI_USERNAME=$admin_username
          WGUI_PASSWORD_HASH=$admin_password_hash

          # The default endpoint address used in the global settings.
          WGUI_ENDPOINT_ADDRESS=$domain

          # The default DNS servers (comma-separated-list) used in the global settings.
          WGUI_DNS=1.1.1.1,1.0.0.1,2606:4700:4700::1111,2606:4700:4700::1001

          # The default MTU used in the global settings.
          # Theoretically, 1420 would be sufficient for Wireguard over IPv4 or IPv6. 1412 is safer when dealing with internet access over PPPoE.
          # But because of all the broken WiFis out there that use tunnels but drop ICMP, we better leave a bit more headroom.
          WGUI_MTU=1300

          # The default persistent keepalive interval used in the global settings.
          WGUI_PERSISTENT_KEEPALIVE=15

          # The default firewall mark used in the global settings.
          WGUI_FIREWALL_MARK=0xca6c

          # The default routing table used in the global settings.
          WGUI_TABLE=auto

          # The default config file path used in the global settings.
          WGUI_CONFIG_FILE_PATH=/etc/wireguard/wg0.conf

          # The default log level.
          WGUI_LOG_LEVEL=INFO

          # The default interface addresses (comma-separated-list) used in the WireGuard server configuration.
          WGUI_SERVER_INTERFACE_ADDRESSES=172.30.0.1/24

          # The default server listen port used in the WireGuard server configuration.
          WGUI_SERVER_LISTEN_PORT=51820

          # The default post-up and post-down scripts used in the WireGuard server configuration.
          WGUI_SERVER_POST_UP_SCRIPT=
          WGUI_SERVER_POST_DOWN_SCRIPT=

          # The default comma-separated-list of CIDRs for the 'Allowed IPs' field for new clients.
          WGUI_DEFAULT_CLIENT_ALLOWED_IPS=0.0.0.0/0,::/0

          # The default comma-separated-list of CIDRs for the 'Extra Allowed IPs' field for new clients.
          WGUI_DEFAULT_CLIENT_EXTRA_ALLOWED_IPS=

          # The default value for the 'Use Server DNS' checkbox for new clients.
          WGUI_DEFAULT_CLIENT_USE_SERVER_DNS=true

          # The default value for the 'Enable after creation' checkbox for new clients.
          WGUI_DEFAULT_CLIENT_ENABLE_AFTER_CREATION=true

          # You can configure further options, like email submission here.
          # Please take a look into the wireguard-ui readme for further details: https://github.com/ngoduykhanh/wireguard-ui#email-configuration
runcmd:
  - #!/bin/bash
  - set -e
  - apt update
  - apt upgrade -y
  - # Generate wireguard-ui session secret (16 bytes, 32 characters)
  - session_secret=$(openssl rand -hex 16)
  - sed -i "s/\$session_secret/$session_secret/g" /usr/local/bin/wireguard-ui/.env
  - # Set the admin username and password
  - username="${admin_panel_username}"
  - sed -i "s/\$admin_username/$username/g" /usr/local/bin/wireguard-ui/.env
  - # Hash password and encode it again with base64 to be compatible with the format wireguard-ui requires
  - apt-get install whois -y
  - password="${admin_panel_password}"
  - password_hash=$(mkpasswd --method=bcrypt "$password" | tr -d '\n' | openssl base64 -A | sed 's/\//\\\//g')
  - sed -i "s/\$admin_password_hash/$password_hash/g" /usr/local/bin/wireguard-ui/.env
  - # Set the domain name
  - sed -i "s/\$domain/${domain_name}/g" /usr/local/bin/wireguard-ui/.env
  - # Download the given version of wireguard-ui
  - wget "https://github.com/ngoduykhanh/wireguard-ui/releases/download/v${wireguard_ui_version}/wireguard-ui-v${wireguard_ui_version}-linux-amd64.tar.gz" -O /tmp/wireguard-ui.tar.gz
  - # Unpack wireguard-ui
  - tar --skip-old-files -C /usr/local/bin/wireguard-ui -xzf /tmp/wireguard-ui.tar.gz wireguard-ui
  - # Create the data directory
  - mkdir -p /usr/local/share/wireguard-ui
  - # Download the given version of caddy
  - apt install -y debian-keyring debian-archive-keyring apt-transport-https curl
  - curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | gpg --batch --yes --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
  - curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | tee /etc/apt/sources.list.d/caddy-stable.list
  - apt update
  - apt-get install -y caddy -o Dpkg::Options::="--force-confold"
  - # Start wireguard-ui and caddy
  - systemctl enable wireguard-ui.service caddy.service &> /dev/null
  - systemctl start wireguard-ui.service caddy.service &> /dev/null
  - until [ -f /etc/wireguard/wg0.conf ]
  - do
  -   sleep 0.1
  - done
  - sleep 0.1
  - # Start wireguard and watch for config changes
  - systemctl enable wg-quick@wg0.service &> /dev/null
  - systemctl start wg-quick@wg0.service &> /dev/null
  - systemctl enable wg-watcher.path &> /dev/null
  - systemctl enable wg-watcher.service &> /dev/null
  - systemctl start wg-watcher.path &> /dev/null
  - systemctl start wg-watcher.service &> /dev/null
  - # Enable the firewall
  - systemctl enable nftables.service &> /dev/null
  - systemctl start nftables.service &> /dev/null
  - sed -i '/net.ipv4.ip_forward=1/s/^#//g' /etc/sysctl.conf
  - sed -i '/net.ipv6.conf.all.forwarding=1/s/^#//g' /etc/sysctl.conf
  - sysctl -p &> /dev/null
  - reboot