import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Board from './Board'

describe('Board', () => {
  it('has chess board', () => {
    render(
      <MemoryRouter>
        <Board />
      </MemoryRouter>
    )

    expect(screen.getByText('a1')).toBeInTheDocument()
    expect(screen.getByText('h8')).toBeInTheDocument()
  })
})
