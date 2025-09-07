import { Link } from 'react-router';

const Home = () => {
  return (
    <div className='flex justify-center min-h-screen'>
      <div className='flex flex-col justify-center p-4'>
        <h2 className='font-bold text-center text-9xl'>Sudoku</h2>
        <h3 className='mb-8 text-3xl text-center'>The Game</h3>
        <div className='flex flex-col gap-2'>
          <Link
            className='min-w-full mx-auto text-5xl bg-green-500 btn rounded-xl min-h-24'
            to='/create'
          >
            Singleplayer
          </Link>
          <Link
            className='min-w-full mx-auto text-5xl bg-blue-500 btn rounded-xl min-h-24'
            to='/lobby'
          >
            Multiplayer
          </Link>
          <Link
            className='min-w-full mx-auto text-5xl bg-gray-500 btn rounded-xl min-h-24'
            to='/settings'
          >
            Settings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
