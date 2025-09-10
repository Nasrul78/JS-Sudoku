import { useState } from 'react';

const NameModal = ({ setName }) => {
  let [tempName, setTempName] = useState('');

  const handleClick = () => {
    if (tempName) {
      setName(tempName);
      localStorage.setItem('name', tempName);
      document.getElementById('nameModal').close();
    }
  };

  return (
    <dialog id='nameModal' className='modal'>
      <div className='flex flex-col gap-4 p-4 modal-box'>
        <form method='dialog'>
          <button className='absolute btn btn-sm btn-circle btn-ghost right-2 top-2'>
            ✕
          </button>
        </form>
        <h3 className='text-lg font-bold'>Enter your name:</h3>

        <input
          className='input'
          type='text'
          value={tempName}
          onChange={(e) => setTempName(e.target.value)}
          placeholder='Enter name...'
        />
        {/* {errorMessage && <p className='text-red-500'>{errorMessage}</p>} */}

        <button
          className='text-xl bg-green-500 btn min-h-12'
          onClick={handleClick}
        >
          Confirm
        </button>
      </div>
    </dialog>
  );
};

export default NameModal;
