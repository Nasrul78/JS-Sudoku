const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Welcome to Sudoku Solver</h1>
            <p className="text-lg mb-8">Solve your Sudoku puzzles with ease!</p>
            <a
                href="/sudoku"
                className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
                Start Solving
            </a>
        </div>
    );
};

export default Home;
