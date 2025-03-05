// functions/src/services/github.service.ts
import fetch from "node-fetch";
import {getRemoteServerConfigValue} from "../config/remote.config";
import {GithubActionInputs} from "../dto/github.dto";
import {InternalServerError} from "../utils/errors";


export async function runGithubAction(
  workflowName: "deploy_wireguard_server" | "destroy_wireguard_server",
  inputs: GithubActionInputs,
  title: string
): Promise<string> {
  const githubKey = await getRemoteServerConfigValue("GitHub_Key");

  const dispatchResponse = await fetch(
    `https://api.github.com/repos/AshkanYarmoradi/Dedicated-IP/actions/workflows/${workflowName}.yaml/dispatches`,
    {
      method: "POST",
      headers: {
        "Accept": "application/vnd.github.v3+json",
        "Authorization": `token ${githubKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ref: "main",
        inputs: inputs,
      }),
    }
  );

  if (!dispatchResponse.ok) {
    throw new InternalServerError(`Failed to trigger GitHub action: ${dispatchResponse.status} ${dispatchResponse.statusText}`);
  }

  return await getGithubActionRunId(workflowName, title, githubKey);
}

async function getGithubActionRunId(workflowName: string, title: string, githubKey: string, maxRetries = 5) {
  let runId = -1;
  let retries = 0;
  do {
    await new Promise((resolve) => setTimeout(resolve, 5000));

    const runsResponse = await fetch(
      `https://api.github.com/repos/AshkanYarmoradi/Dedicated-IP/actions/workflows/${workflowName}.yaml/runs?branch=main&per_page=100`,
      {
        headers: {
          "Accept": "application/vnd.github.v3+json",
          "Authorization": `token ${githubKey}`,
        },
      }
    );

    if (!runsResponse.ok) {
      throw new InternalServerError(`Failed to retrieve workflow runs: ${runsResponse.status} ${runsResponse.statusText}`);
    }

    const runsData = await runsResponse.json() as any;

    const workflowRun = runsData.workflow_runs.find(
      (run: { name?: string; id: number }) => run.name?.includes(title)
    );

    if (workflowRun) {
      runId = workflowRun.id;
    }
    retries++;
  } while (runId === -1 && retries < maxRetries);
  if (runId < 0) {
    throw new InternalServerError(`Failed to find GitHub action run after multiple retries: ${title}`);
  }
  return runId.toString();
}
