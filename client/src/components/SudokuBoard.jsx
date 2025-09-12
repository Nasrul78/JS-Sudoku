import React from "react"

const SudokuCell = React.memo(
  ({ value, onChange, row, col, cellRef, onKeyDown }) => {
    const extraBorder =
      `${
        (row + 1) % 3 === 0 ? "border-b-4 border-b-gray-800" : "border-gray-600"
      } ` +
      `${
        (col + 1) % 3 === 0 ? "border-r-4 border-r-gray-800" : "border-gray-600"
      } ` +
      `${row % 3 === 0 ? "border-t-4 border-t-gray-800" : "border-gray-600"} ` +
      `${col % 3 === 0 ? "border-l-4 border-l-gray-800" : "border-gray-600"} ` +
      `${row === 8 ? "border-b-4 border-b-gray-800" : "border-gray-600"} ` +
      `${col === 8 ? "border-r-4 border-r-gray-800" : "border-gray-600"}`

    return (
      <input
        ref={cellRef}
        type="text"
        maxLength="1"
        value={value || ""}
        onChange={(e) => onChange(row, col, e.target.value)}
        onKeyDown={(e) => onKeyDown(e, row, col)}
        className={`w-10 h-10 text-center border focus:outline-none focus:ring-2 focus:ring-blue-400
                  font-bold text-lg caret-transparent ${extraBorder}`}
      />
    )
  }
)

const SudokuRow = ({ rowIndex, row, onChange, cellRefs, onKeyDown }) => {
  return (
    <div className="flex">
      {row.map((value, colIndex) => (
        <SudokuCell
          key={colIndex}
          value={value}
          row={rowIndex}
          col={colIndex}
          onChange={onChange}
          cellRef={cellRefs[rowIndex][colIndex]}
          onKeyDown={onKeyDown}
        />
      ))}
    </div>
  )
}

const SudokuBoard = ({ board, onChange, cellRefs, onKeyDown }) => {
  return (
    <div className="inline-block border-2 border-gray-800">
      {board.map((row, rowIndex) => (
        <SudokuRow
          key={rowIndex}
          rowIndex={rowIndex}
          row={row}
          onChange={onChange}
          cellRefs={cellRefs}
          onKeyDown={onKeyDown}
        />
      ))}
    </div>
  )
}

export default SudokuBoard
