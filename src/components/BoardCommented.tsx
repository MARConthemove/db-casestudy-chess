// Imports etc.
import React, { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { calculatePossibleKnightMoves } from './calculatePossibleMoves'
import './Board.css'

import { Box, Button } from '@mui/material'

// Hier werden die Arrays erstellt die für das Schachbrett notwendig sind
const createChessBoard = () => {
  const rows = 'abcdefgh'.split('') // [a, b, c, d, e, f, g, h]
  const cols: number[] = []
  for (let i = 1; i <= 8; i++) {
    cols.push(i) // [1, 2, 3, 4, 5, 6, 7, 8]
  }
  return { rows, cols }
}
/* 1 ->
const cols = Array.from({length: 8}, (_, i) => i + 1);
Array.from() erzeugt ein neues Array der Länge 8 und füllt es mit Zahlen von 1 - 8. Der zweite Paramter ist eine Mappfunktion die jedes Element im Array zu einem entsprechenden Wert konvertiert - i + 1 hier weil i bei 0 beginnt.
*/

/* 2 ->
const createChessBoard = () => {
  const rows = 'abcdefgh'.split('');
  const cols = Array.from({length: 8}, (_, i) => i + 1);
  return rows.flatMap(row => cols.map(col => `${row}${col}`));
}
Bei dieser variante wäre es möglich alles direkt in einer Funktion zu erzeugen
*/

const Board: React.FC = () => {
  const [startPosition, setStartPosition] = useState('') // useState(..) gibt ein array zurück mit zwei elementen: der aktuelle zustand und eine funktion.
  const [possibleMoves, setPossibleMoves] = useState<string[]>([]) // ein state um die möglichen züge zu speichern, die von der jeweiligen position aus gemacht werden können.
  let [searchParams] = useSearchParams() // useSearchParams wird verwendet, um den "start" Paramter aus der URL zu lesen, der die Anfangsposition des Schachsprungs angibt, also nach dem ?
  const navigate = useNavigate() // useNavigate wird verwendet um zu einem Bestimmten Pfad zu navigierien. Es ermöglicht navigate(...) als funktion zu benutzen. Hier wird navigate verwendet um die URL zu ändern un den parameter "start" zu aktualisieren, wenn ein Schachfeld angeklickt wird, ebenso wie zum resetten des Spiels.

  // useEffect um auf änderungen des searchParams (Nebeneffekt) zu reagieren. Also wenn sich die Abhängigkeit [searchParams] ändert, wird der useEffect ausgelöst und rerendert
  useEffect(() => {
    const start = searchParams.get('start') // Abruf des Parameter "start" um die Startposition aus der URL zu ermitteln
    if (start) {
      // wenn start einen Wert hat, also nicht null oder undefined wird die if-Anweisung ausgeführt
      setStartPosition(start) // der Zustand "startPosition" wird auf den Wert "start" gesetz
      const moves = calculatePossibleKnightMoves(start) // Mögliche Züge werden durch die Funktion "claculatePossibleKnightMoves()" berechnet und der Variablen moves zugewiesen.
      setPossibleMoves(moves) // der Zustand possibleMoves wird auf den Wert "moves" gesetzt
    }
  }, [searchParams])

  // Click Handler wird aufgerufen wenn ein Feld angeklickt wird
  const handleSquareClick = (position: string) => {
    setStartPosition(position) // setzen der Startposition

    const searchParams = new URLSearchParams() // neues URL Search Params Objekt wird erstellt. Dieses Objekt wird verwndet, um die Suchparameter der aktuellen URL zu manipulieren.
    searchParams.set('start', position) // set-Methode um den Wert des "start" Suchparameters auf die geklickte Position zu setzen. Wenn der "start" Parameter bereits existiert wird er überschrieben, ansonsten wird er erstellt.
    const newUrl = `?${searchParams.toString()}`
    navigate(newUrl) // navigation zur neuen URL Seite. Neu laden der Page wird ausgelöst
  }

  // wird aufgerufen beim betätigen des Reset Knopfes
  const handleReset = () => {
    navigate('/chessboard.html')
    window.location.reload() // aktuelle Seite soll neu geladen werden. JavaScript code wird neu ausgeführt. Eigentlich sollte man das in einer SinglePage App nicht verwenden, da es zu einem kompletten neu aufbau führt. Mögliche andere Varianten wären useState oder useReducer zu verwenden!
  }

  // Destructuring:
  // rows = [1,...,8]
  // cols = [a,...,h]
  const { rows, cols } = createChessBoard()

  // JSX Return:
  return (
    <>
      {' '}
      {/* Fragment Tags*/}
      <Box display='flex' flexDirection='column' alignItems='center'>
        {/* Iteration über rows: Für jede Zeile wird eine weitere Box erzeugt, die die Spalten für diese Zeile enthält*/}
        {rows.map((row, i) => (
          <Box key={i} display='flex'>
            {/* Innerhalb jeder Zeile wird über jede Spalte iteriert */}
            {cols.map((col, j) => {
              const isWhiteSquare = (i + j) % 2 === 0 // Wenn die Summe der Zeilen- und Spaltenindexe gerade ist, ist die Zellen Weiß, ansonsten schwarz (true or false)
              const position = `${row}${col}` // Template Literal um Zeichen zu erstellen, also aktuelle Position zb. a1, b3 usw.
              const isStartPosition = position === startPosition // Prüfung ob aktuelle Position gleich Startposition -> true / false
              const isPossibleMove = possibleMoves.includes(position) // Prüfung ob aktuelle Position in der Liste der möglichen Züge enthalten ist, wenn ja -> true, nein -> false
              let additionalClassName = isWhiteSquare // Ternary Operator um zu bestimmen, welche zusätzliche CSS Klasse der Zelle zugewiesen wird.
                ? 'white-square'
                : 'black-square'
              let textClassName = 'default-text' // Default Text CSS Klasse
              // Prüfung welche Klasse zugewiesen werden soll.
              if (isStartPosition) {
                textClassName = 'start-text'
              } else if (isPossibleMove) {
                textClassName = 'target-text'
              }

              return (
                <Box
                  key={position}
                  className={`board-square ${additionalClassName}`} // Hier wird die Farbe des Feldes und andere Eigenschaften zugewiesen
                  onClick={() => handleSquareClick(position)}
                >
                  {/* Hier wird Textfarbe zugewiesen */}
                  <Box className={textClassName}>{position}</Box>{' '}
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
