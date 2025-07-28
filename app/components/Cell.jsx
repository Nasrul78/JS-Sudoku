const Cell = ({ value }) => {
    return (
        <div className="border-[1.5px] border-black w-8 h-8 flex justify-center items-center text-black text-center font-semibold">
            {value || ''}
        </div>
    );
}

export default Cell;