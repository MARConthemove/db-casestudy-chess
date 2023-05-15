import React from 'react'
import './board.css'

const Board: React.FC = () => {
  const rows = 'abcdefgh'.split('')
  console.log('rows:', rows)

  // const columns = Array.from({ length: 8 }, (_, i) => i + 1) // [1, 2, 3, 4, 5, 6, 7, 8]
  const columns: number[] = []
  for (let i = 1; i <= 8; i++) {
    columns.push(i)
  }
  console.log('columns:', columns)

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      {rows.map((row, i) => (
        <div key={i} style={{ display: 'flex' }}>
          {columns.map((column, j) => {
            const isWhiteSquare = (i + j) % 2 === 0
            const squareClassName = `board-square ${
              isWhiteSquare ? 'white-square' : 'black-square'
            }`
            return (
              <div key={j} className={squareClassName}>
                {row}
                {column}
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default Board
