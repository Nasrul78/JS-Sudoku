import { Link } from "react-router-dom";

const Game = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold mb-0">Game Page</h1>
            <p className="mt-0 mb-4 text-xl">This is where the game will be played.</p>
            <Link to="/">
                <button className="linkButton bg-blue-500 hover:bg-blue-600">
                    Go to Home
                </button>
            </Link>
        </div>
    );
};

export default Game;
