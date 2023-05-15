const possibleKnightMoves: [number, number][] = [
  [-1, -2],
  [-1, 2],
  [1, -2],
  [1, 2],
  [-2, -1],
  [-2, 1],
  [2, -1],
  [2, 1],
]

export const calculatePossibleKnightMoves = (start: string) => {
  let startRow = start.charCodeAt(0) - 'a'.charCodeAt(0)
  let startCol = parseInt(start[1]) - 1
  let possibleMoves = []

  for (let move of possibleKnightMoves) {
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
