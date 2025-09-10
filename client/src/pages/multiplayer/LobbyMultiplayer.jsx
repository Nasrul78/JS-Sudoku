import { useParams, useOutletContext, Link } from 'react-router';

const LobbyMultiplayer = () => {
  const { roomId } = useParams();

  return (
    <div className='flex justify-center p-2 bg-base-200 rounded-3xl'>
      <div className='p-4 border-4 w-72 h-96 bg-base-100 rounded-l-2xl border-base-300'>
        <h3 className='text-2xl font-semibold'>Operator Panel</h3>
        <Link
          className='text-xl bg-green-500 btn min-h-12'
          to={`/game/${roomId}`}
        >
          Start
        </Link>
      </div>
      <div className='p-4 border-4 border-l-0 w-72 h-96 bg-base-100 rounded-r-2xl border-base-300'>
        <h3 className='text-2xl font-semibold'>Player List</h3>
        <ul className='list'>
          <li className='list-row'>
            <strong>1.</strong> Player1
          </li>
          <li className='list-row'>
            <strong>2.</strong> Player2
          </li>
          <li className='list-row'>
            <strong>3.</strong> Player3
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LobbyMultiplayer;
