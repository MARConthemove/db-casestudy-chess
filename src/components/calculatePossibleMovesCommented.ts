// Nested Array mit möglichen Zugkombinationen

// [y, x]
const possibleKnightMoves: [number, number][] = [
  // d3:
  [-1, -2],
  // d7:
  [-1, 2],
  // f3:
  [1, -2],
  // f7:
  [1, 2],
  // c4:
  [-2, -1],
  // c6:
  [-2, 1],
  // g4:
  [2, -1],
  // g6 Gipfel haha:
  [2, 1],
]

// start = "e5"
export const calculatePossibleKnightMoves = (start: string) => {
  // Test ob Startfeld ein Feld des Schachbretts ist
  if (!/^[a-h][1-8]$/.test(start)) {
    return []
  }

  // start.charCodeAt(0) -> 101 für "e"
  // 'a'.charCodeAt(0) -> 97 für "a"
  // startRow = 101 - 97 = 4
  let startRow = start.charCodeAt(0) - 'a'.charCodeAt(0)

  // parseInt("5") - 1
  // startCol = 4
  let startCol = parseInt(start[1]) - 1

  // erzeugen eines leeren Arrays
  let possibleMoves = []

  for (let move of possibleKnightMoves) {
    // i = 0:
    // newRow: 4 + (-1) = 3
    // newCol: 4 + (-2) = 2
    let newRow = startRow + move[0]
    let newCol = startCol + move[1]

    // Prüfung ob newRow / newCol zwischen den Werten 0 - 8 sind, wenn true ->
    if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
      let newPosition =
        // String.fromCharCode(3 + 97) -> "d"
        String.fromCharCode(newRow + 'a'.charCodeAt(0)) +
        // (2 + 1).toString() -> "3"
        (newCol + 1).toString()
      // "d" + "3" = "d3"
      possibleMoves.push(newPosition) // "d3" wird in possibleMoves Array gepushed
    }
  }
  return possibleMoves
}
