import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import App from './App'

describe('App', () => {
  it('renders the title', () => {
    render(<App />)
    const titleElement = screen.getByText('Case Study Chess')
    expect(titleElement).toBeInTheDocument()
  })
})
