import { calculatePossibleKnightMoves } from './calculatePossibleMoves'

describe('calculatePossibleKnightMoves', () => {
  it('calculates correct knight moves from a given position', () => {
    const startPosition = 'd4'
    const expectedMoves = ['b3', 'b5', 'c2', 'c6', 'e2', 'e6', 'f3', 'f5']

    const moves = calculatePossibleKnightMoves(startPosition)

    expect(moves.sort()).toEqual(expectedMoves.sort())
  })

  it('calculates correct knight moves from a corner position', () => {
    const startPosition = 'a1'
    const expectedMoves = ['b3', 'c2']

    const moves = calculatePossibleKnightMoves(startPosition)

    expect(moves.sort()).toEqual(expectedMoves.sort())
  })

  it('returns an empty array for invalid input', () => {
    const startPosition = 'i9'

    const moves = calculatePossibleKnightMoves(startPosition)

    expect(moves).toEqual([])
  })
})
