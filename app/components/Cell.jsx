const Cell = ({ value }) => {
    return (
        <div className="border border-gray-300 w-12 h-12 flex items-center justify-center text-lg font-semibold">
            {value !== undefined ? value : ''}
        </div>
    );
}

export default Cell;