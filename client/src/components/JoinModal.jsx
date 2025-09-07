import { Link } from 'react-router';

const JoinModal = ({ roomId, setRoomId, handleClick }) => {
  return (
    <dialog id='joinModal' className='modal'>
      <div className='flex flex-col gap-4 p-4 modal-box'>
        <form method='dialog'>
          <button className='absolute btn btn-sm btn-circle btn-ghost right-2 top-2'>
            ✕
          </button>
        </form>
        <h3 className='text-lg font-bold'>Enter room ID to join:</h3>
        <input
          className='input'
          type='text'
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          placeholder='Join Room ID'
        />
        <Link
          className='text-xl bg-green-500 btn min-h-12'
          to={roomId ? `/lobby/${roomId}` : '#'}
          onClick={handleClick}
        >
          Create
        </Link>
      </div>
    </dialog>
  );
};

export default JoinModal;
