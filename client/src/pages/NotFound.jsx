import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link to="/" >
                <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                    Go to Home
                </button>
            </Link >
        </div >
    );
};

export default NotFound;
