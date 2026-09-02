export type DeploymentEnvironment = 'local' | 'preview' | 'production'

export interface DeploymentInfo {
  environment: DeploymentEnvironment
  prNumber: string
  branch: string
  commitSha: string
  buildTimestamp: string
}

const environment =
  (import.meta.env.VITE_DEPLOYMENT_ENVIRONMENT as DeploymentEnvironment | undefined) ??
  'local'

export const deployment: DeploymentInfo = {
  environment,
  prNumber: import.meta.env.VITE_PR_NUMBER ?? '—',
  branch: import.meta.env.VITE_BRANCH_NAME ?? 'local-development',
  commitSha: import.meta.env.VITE_COMMIT_SHA ?? 'dev',
  buildTimestamp:
    import.meta.env.VITE_BUILD_TIMESTAMP ?? new Date().toISOString(),
}