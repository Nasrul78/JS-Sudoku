import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold mb-0">Welcome to Sudoku!</h1>
            <p className="mt-0 mb-8 text-xl">Made by Nasrul</p>
            <Link to="/game" className="min-w-full">
                <button className="linkButton bg-blue-500 hover:bg-blue-600">
                    Singleplayer
                </button>
            </Link>
            <Link to="/lobby" className="min-w-full mt-1">
                <button className="linkButton bg-green-500 hover:bg-green-600">
                    Multiplayer
                </button>
            </Link>
            <Link to="/settings" className="min-w-full mt-1">
                <button className="linkButton bg-gray-500 hover:bg-gray-600">
                    Settings
                </button>
            </Link>
        </div>
    );
};

export default Home;
