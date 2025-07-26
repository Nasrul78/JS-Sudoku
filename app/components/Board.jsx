import { useReducer } from "react";
import Cell from "./Cell";

const initialState = Array(9).fill().map(() => Array(9).fill(null));

const ACTION_TYPES = {
    CELL_CLICK: 'CELL_CLICK',
}

const reducer = (state, action) => {

}

const Board = () => {
    const [cells, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="grid grid-cols-9 gap-1">
            {cells.map((row, rowIndex) => (
                row.map((cell, colIndex) => (
                    <Cell
                        value={cell}
                        onClick={() => dispatch({ type: 'CELL_CLICK', payload: { rowIndex, colIndex } })}
                    />
                ))
            ))}
        </div>
    );
}

export default Board;