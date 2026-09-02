import './App.css'

import { DeploymentCard } from './components/DeploymentCard'
import { DeploymentStatus } from './components/DeploymentStatus'
import { deployment } from './data/deployment'

function App() {
  return (
    <main className="app">
      <header className="header">
        <p className="eyebrow">⚓ SHIPYARD</p>
        <h1>PR Delivery Factory</h1>
      </header>

      <DeploymentCard deployment={deployment} />

      <DeploymentStatus />
    </main>
  )
}

export default App