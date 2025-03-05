// functions/src/dto/github.dto.ts
export interface GithubActionInputs {
  environment: string;
  domain_prefix: string;
  admin_panel_username?: string;
  admin_panel_password?: string;
  server_type?: string;
  server_location?: string;
  datacenter_provider?: string;
  api_key?: string;
}

export interface GithubWebhookPayload {
  action: string;
  workflow_run: {
    id: number;
    name: string;
    status: string;
  };
}
