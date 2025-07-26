import Cell from '../components/Cell.jsx';

const Game = () => {
    return (
        <div className="game">
            <h1 className="text-2xl font-bold">Sudoku Game</h1>
            <p className="text-gray-700">Welcome to the Sudoku game! Solve the puzzle by filling in the grid.</p>
            <Board />
        </div>
    );
}

export default Game;