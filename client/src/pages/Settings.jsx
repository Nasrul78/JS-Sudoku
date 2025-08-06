import { Link } from "react-router-dom";

const Settings = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold mb-0s">Settings</h1>
            <p className="mt-0 mb-4 text-xl">Here you can adjust your game settings.</p>
            <Link to="/" className="mt-4">
                <button className="linkButton bg-blue-500 hover:bg-blue-600">
                    Back to Home
                </button>
            </Link>
        </div>
    );
};

export default Settings;
