const MessageText = ({ data }) => {
    return (
        <div className="flex items-center mb-2">
            <span className="font-bold mr-2">{data.sender}</span>
            <span>{data.message}</span>
            <span className="text-gray-500 ml-auto text-sm">{data.time}</span>
        </div>
    );
};

export default MessageText;
