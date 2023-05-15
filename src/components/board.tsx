import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './board.css'

const Board: React.FC = () => {
  const [startPosition, setStartPosition] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const start = searchParams.get('start')
    if (start) {
      setStartPosition(start)
    }
  }, [location])

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
            let additionalClassName = isWhiteSquare
              ? 'white-square'
              : 'black-square'
            const squareClassName = `board-square ${additionalClassName}`
            const textClassName = isSelected ? 'start-square' : ''

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
