import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './board.css'

const Board: React.FC = () => {
  const [startPosition, setStartPosition] = useState('')
  const [possibleMoves, setPossibleMoves] = useState<string[]>([])
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const start = searchParams.get('start')
    if (start) {
      setStartPosition(start)
      const moves = calculateHorseMoves(start)
      setPossibleMoves(moves)
    }
  }, [location])

  console.log('possibleMoves: ', possibleMoves)

  const handleSquareClick = (position: string) => {
    setStartPosition(position)

    const searchParams = new URLSearchParams()
    searchParams.set('start', position)
    const newUrl = `?${searchParams.toString()}`
    navigate(newUrl)
  }

  const rows = 'abcdefgh'.split('')

  const columns: number[] = []
  for (let i = 1; i <= 8; i++) {
    columns.push(i)
  }

  const horseMoves: [number, number][] = [
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [-2, -1],
    [-2, 1],
    [2, -1],
    [2, 1],
  ]

  const calculateHorseMoves = (start: string) => {
    let startRow = start.charCodeAt(0) - 'a'.charCodeAt(0)
    let startCol = parseInt(start[1]) - 1

    let possibleMoves = []

    for (let move of horseMoves) {
      let newRow = startRow + move[0]
      let newCol = startCol + move[1]

      if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
        let newPosition =
          String.fromCharCode(newRow + 'a'.charCodeAt(0)) +
          (newCol + 1).toString()
        possibleMoves.push(newPosition)
      }
    }

    return possibleMoves
  }

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      {rows.map((row, i) => (
        <div key={i} style={{ display: 'flex' }}>
          {columns.map((column, j) => {
            const isWhiteSquare = (i + j) % 2 === 0
            const position = `${row}${column}`
            const isSelected = position === startPosition
            const isPossibleMove = possibleMoves.includes(position)
            let additionalClassName = isWhiteSquare
              ? 'white-square'
              : 'black-square'
            let textClassName = 'default-text'
            if (isSelected) {
              textClassName = 'start-text'
            } else if (isPossibleMove) {
              textClassName = 'target-text'
            }

            const squareClassName = `board-square ${additionalClassName}`

            return (
              <div
                key={j}
                className={squareClassName}
                onClick={() => handleSquareClick(position)}
              >
                <div className={textClassName}>
                  {row}
                  {column}
                </div>
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default Board
