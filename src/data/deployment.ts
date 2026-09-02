export type DeploymentEnvironment = 'local' | 'preview' | 'production'

export interface DeploymentInfo {
  environment: DeploymentEnvironment
  prNumber: string
  branch: string
  commitSha: string
  buildTimestamp: string
}

export const deployment: DeploymentInfo = {
  environment: 'local',
  prNumber: '—',
  branch: 'local-development',
  commitSha: 'dev',
  buildTimestamp: new Date().toISOString(),
}