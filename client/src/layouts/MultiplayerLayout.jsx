import { Outlet, Link } from 'react-router';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import Navbar from '../components/Navbar.jsx';
import Chat from '../components/Chat.jsx';

let socket;

const MultiplayerLayout = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket = io.connect('http://172.27.206.42:3000');

    socket.on('receive-message', (msg) => {
      console.log(typeof msg);
      setMessages((prevMessages) => [...prevMessages, msg]);
    });
  }, []);

  const handleClick = (msg, setMsg) => {
    socket.emit('send-message', msg);
    setMsg('');
  };

  return (
    <div className='flex flex-col justify-center min-h-screen'>
      <Navbar />
      <main className='flex flex-col justify-center flex-1 align-middle'>
        <div className='flex justify-center gap-4'>
          <Outlet />
          <Chat messages={messages} handleClick={handleClick} />
        </div>
      </main>
    </div>
  );
};

export default MultiplayerLayout;
