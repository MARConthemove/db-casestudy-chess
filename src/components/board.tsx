import React, { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { calculatePossibleKnightMoves } from './calculatePossibleMoves'
import './Board.css'

import { Box, Button } from '@mui/material'

const createChessBoard = () => {
  const rows = 'abcdefgh'.split('')
  const cols: number[] = []
  for (let i = 1; i <= 8; i++) {
    cols.push(i)
  }
  return { rows, cols }
}

const Board: React.FC = () => {
  const [startPosition, setStartPosition] = useState('')
  const [possibleMoves, setPossibleMoves] = useState<string[]>([])
  let [searchParams] = useSearchParams()
  const navigate = useNavigate()

  useEffect(() => {
    const start = searchParams.get('start')
    if (start) {
      setStartPosition(start)
      const moves = calculatePossibleKnightMoves(start)
      setPossibleMoves(moves)
    }
  }, [searchParams])

  const handleSquareClick = (position: string) => {
    setStartPosition(position)

    const searchParams = new URLSearchParams()
    searchParams.set('start', position)
    const newUrl = `?${searchParams.toString()}`
    navigate(newUrl)
  }

  const handleReset = () => {
    navigate('/chessboard.html')
    window.location.reload()
  }

  const { rows, cols } = createChessBoard()

  return (
    <>
      <Box display='flex' flexDirection='column' alignItems='center'>
        {rows.map((row, i) => (
          <Box key={i} display='flex'>
            {cols.map((col, j) => {
              const isWhiteSquare = (i + j) % 2 === 0
              const position = `${row}${col}`
              const isStartPosition = position === startPosition
              const isPossibleMove = possibleMoves.includes(position)
              let additionalClassName = isWhiteSquare
                ? 'white-square'
                : 'black-square'
              let textClassName = 'default-text'
              if (isStartPosition) {
                textClassName = 'start-text'
              } else if (isPossibleMove) {
                textClassName = 'target-text'
              }

              return (
                <Box
                  key={position}
                  className={`board-square ${additionalClassName}`}
                  onClick={() => handleSquareClick(position)}
                >
                  <Box className={textClassName}>{position}</Box>
                </Box>
              )
            })}
          </Box>
        ))}
      </Box>
      <Button
        variant='outlined'
        color='error'
        onClick={handleReset}
        style={{ marginTop: '20px' }}
      >
        Reset Knight Position
      </Button>
    </>
  )
}

export default Board
