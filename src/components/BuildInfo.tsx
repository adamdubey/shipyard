import type { DeploymentInfo } from '../data/deployment'

interface BuildInfoProps {
  deployment: DeploymentInfo
}

export function BuildInfo({ deployment }: BuildInfoProps) {
  return (
    <dl className="deployment-info">
      <div>
        <dt>PR</dt>
        <dd>{deployment.prNumber}</dd>
      </div>

      <div>
        <dt>Branch</dt>
        <dd>{deployment.branch}</dd>
      </div>

      <div>
        <dt>Commit</dt>
        <dd>{deployment.commitSha}</dd>
      </div>

      <div>
        <dt>Build</dt>
        <dd>{deployment.buildTimestamp}</dd>
      </div>
    </dl>
  )
}