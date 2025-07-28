import Board from "../components/Board";

const Game = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen min-w-screen bg-gray-100">
            <h1 className="text-2xl font-bold text-black">Sudoku Game</h1>
            <Board />
        </div>
    );
}

export default Game;