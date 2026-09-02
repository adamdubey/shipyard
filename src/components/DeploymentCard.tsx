import type { DeploymentInfo } from '../data/deployment'
import { BuildInfo } from './BuildInfo'
import { EnvironmentBadge } from './EnvironmentBadge'

interface DeploymentCardProps {
  deployment: DeploymentInfo
}

export function DeploymentCard({
  deployment,
}: DeploymentCardProps) {
  return (
    <section className="deployment-card">
      <div className="section-heading">
        <span>Environment</span>

        <EnvironmentBadge environment={deployment.environment} />
      </div>

      <BuildInfo deployment={deployment} />
    </section>
  )
}