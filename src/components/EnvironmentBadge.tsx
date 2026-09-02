import type { DeploymentEnvironment } from '../data/deployment'

interface EnvironmentBadgeProps {
  environment: DeploymentEnvironment
}

export function EnvironmentBadge({
  environment,
}: EnvironmentBadgeProps) {
  return (
    <span className={`environment-badge environment-${environment}`}>
      {environment.toUpperCase()}
    </span>
  )
}