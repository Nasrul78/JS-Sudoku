import { useState, useRef } from "react"
import SudokuBoard from "../../components/SudokuBoard"
import initializeBoard from "../../utils/initializeBoard"

const Game = () => {
  const [board, setBoard] = useState(initializeBoard())

  const onChange = (row, col, value) => {
    const cleanedValue = /^[1-9]$/.test(value) ? value : ""

    setBoard((prevBoard) => {
      const newBoard = prevBoard.map((r, rowIndex) =>
        r.map((cell, colIndex) =>
          rowIndex === row && colIndex === col ? cleanedValue : cell
        )
      )
      return newBoard
    })
  }

  return (
    <div className="flex flex-col gap-4 justify-center">
      <h2 className="font-semibold text-center text-8xl">Game</h2>
      <SudokuBoard board={board} onChange={onChange} />
    </div>
  )
}

export default Game
