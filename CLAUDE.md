# dedicated-ip

Archived third-party WireGuard dedicated-IP VPN service (upstream AshkanYarmoradi/dedicated-ip, MIT; maintainer stopped supporting it). Reference/fork only; nothing from it runs on a1 (no unit, timer, cron or CLI on PATH). Related infra: ObsRAG `infrastructure/kanab-wireguard.md`.

## Architecture
- Monorepo of independent parts, each with its own README:
  - `panel/`: Go 1.21 admin panel (WireGuard UI fork; `main.go`, `handler/`, `router/`, `store/jsondb`, `emailer/`, `templates/`), Dockerfile + `docker-compose.yaml`, yarn assets. Module `github.com/AshkanYarmoradi/dedicated-ip/panel`.
  - `app/`: Flutter client (Android/iOS/desktop/web, WireGuard + Firebase).
  - `functions/`: Firebase Cloud Functions (TypeScript, Node 22): auth, Stripe/Mollie payments, SendGrid, provisioning.
  - `web/`: Nx workspace, Angular 19 dashboard (`apps/dashboard`, `libs/services`).
  - `terraform/` (arvan, cloudflare, hetzner, linode) and `ansible/` (`wireguard/`, `update-panel/`) for provisioning; `price.json` pricing.
- Panel config via flags/env: BIND_ADDRESS, DISABLE_LOGIN, SMTP_HOSTNAME, SMTP_PORT, SMTP_HELO, WGUI_ENABLE_INTERNAL_LOGIN (see `panel/main.go`). Firebase/Stripe/SendGrid keys belong in env/secrets, never committed.
- Logs: none on a1.
- a1 toolchain: go 1.22, node/npm, docker, terraform, ansible present; flutter, firebase CLI, yarn absent.

## Verify
Run 2026-10-19 on a1 (all from `panel/`; Go modules download to `~/go`, nothing lands in the repo):
1. `go build ./...` (passed)
2. `go vet ./...` (passed)
3. `go test ./...` (passed trivially; no test files exist)
- `cd functions && npm ci && npm run lint && npm run build`: unverified (installs node_modules; delete it after).
- `cd web && npm ci`, then Nx lint/build: unverified. `app/` (`flutter analyze`, `flutter test`): unverified, no Flutter SDK.
- `terraform fmt -check -recursive terraform` exits 3 (pre-existing unformatted files); `terraform plan/apply` and `ansible-playbook` against inventories change real servers or spend money: never run without Rhoni.
