import { useState } from 'react';
import { Link } from 'react-router';
import JoinModal from '../../components/JoinModal';

const Lobby = () => {
  const [roomId, setRoomId] = useState('');
  const handleClick = (e) => {
    if (!roomId) {
      e.preventDefault();
      alert('Room ID cannot be empty!');
    }
  };

  return (
    <div className='flex flex-col justify-center gap-4 p-4 min-w-48'>
      <h2 className='font-semibold text-center text-8xl'>Lobby</h2>
      <div className='flex flex-col gap-2'>
        <Link
          className='min-w-full mx-auto text-4xl bg-green-500 btn rounded-xl min-h-18'
          to='/lobby/create'
        >
          Create Lobby
        </Link>
        <button
          className='min-w-full mx-auto text-4xl bg-blue-500 btn rounded-xl min-h-18'
          onClick={() => document.getElementById('joinModal').showModal()}
        >
          Join Lobby
        </button>
      </div>

      <JoinModal
        roomId={roomId}
        setRoomId={setRoomId}
        handleClick={handleClick}
      />
    </div>
  );
};

export default Lobby;
