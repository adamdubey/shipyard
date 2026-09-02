import { render, screen } from '@testing-library/react'

import App from './App'

describe('Shipyard application', () => {
  it('renders the Shipyard heading', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /pr delivery factory/i,
      }),
    ).toBeInTheDocument()
  })

  it('renders the current environment', () => {
    render(<App />)

    expect(screen.getByText('LOCAL')).toBeInTheDocument()
  })

  it('renders the branch name', () => {
    render(<App />)

    expect(
      screen.getByText('local-development'),
    ).toBeInTheDocument()
  })

  it('renders the commit SHA', () => {
    render(<App />)

    expect(screen.getByText('dev')).toBeInTheDocument()
  })

  it('renders deployment status', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /deployment status/i,
      }),
    ).toBeInTheDocument()

    expect(
      screen.getByText(/ready for qa/i),
    ).toBeInTheDocument()
  })
})