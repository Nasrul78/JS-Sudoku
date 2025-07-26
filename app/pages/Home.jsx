import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <h1 className="text-2xl font-bold">Welcome to the Sudoku Game</h1>
            <p className="mt-4">Click on the button below to start playing!</p>
            <Link to="/game" className="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded">
                <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded">
                    Start Game
                </button>
            </Link>
        </div>
    );
}

export default Home;