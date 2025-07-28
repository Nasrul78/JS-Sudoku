import { useReducer } from "react";
import Cell from "./Cell";

const initialState = Array(9).fill().map(() => Array(9).fill(2));

const ACTION_TYPES = {
    CELL_CLICK: 'CELL_CLICK',
}

const reducer = (state, action) => {
    return state;
}

const Board = () => {
    const [cells, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="relative border-[3px] border-black grid grid-cols-9 gap-0">
            {cells.map((row, rowIndex) => (
                row.map((cell, colIndex) => (
                    <Cell
                        value={cell}
                        onClick={() => dispatch({ type: 'CELL_CLICK', payload: { rowIndex, colIndex } })}
                    />
                ))
            ))}
            {[1, 2].map((_, index) => {
                return (
                    <div className="absolute left-[] bg-black w-3 h-max z-10"></div>
                );
            })}
        </div>
    );
}

export default Board;