import { Link } from 'react-router';

const Create = () => {
  return (
    <div>
      Create Singleplayer
      <Link className='text-xl bg-green-500 btn min-h-12' to='/game'>
        Create
      </Link>
    </div>
  );
};

export default Create;
