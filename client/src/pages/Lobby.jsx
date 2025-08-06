import { Link } from 'react-router-dom';
import ChatRoom from '../components/ChatRoom';

const Lobby = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold mb-0">Lobby Page</h1>
            <p className="mt-0 mb-4 text-xl">Welcome to the lobby! Here you can join or create a game.</p>
            <Link to="/">
                <button className="linkButton bg-blue-500 hover:bg-blue-600">
                    Go to Home
                </button>
            </Link>
            <ChatRoom />
        </div>
    );
};

export default Lobby;
