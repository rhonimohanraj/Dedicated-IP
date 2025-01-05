#!/usr/bin/bash
ufw route delete allow in on wg0 out on eth0
iptables -t nat -D POSTROUTING -o eth0 -j MASQUERADE