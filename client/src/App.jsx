import { BrowserRouter, Routes, Route } from 'react-router';
import AppLayout from './layouts/AppLayout.jsx';
import MultiplayerLayout from './layouts/MultiplayerLayout.jsx';
import Create from './pages/Singleplayer/Create.jsx';
import Game from './pages/singleplayer/Game.jsx';
import Home from './pages/Home.jsx';
import Lobby from './pages/Multiplayer/Lobby.jsx';
import LobbyMultiplayer from './pages/multiplayer/LobbyMultiplayer.jsx';
import CreateMultiplayer from './pages/multiplayer/CreateMultiplayer.jsx';
import GameMultiplayer from './pages/Multiplayer/GameMultiplayer.jsx';
import Info from './pages/Info.jsx';
import Settings from './pages/Settings.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

        <Route path='/' element={<AppLayout />}>
          <Route path='create' element={<Create />} />
          <Route path='game' element={<Game />} />
          <Route path='info' element={<Info />} />
          <Route path='settings' element={<Settings />} />
        </Route>

        <Route path='/' element={<MultiplayerLayout />}>
          <Route path='lobby' element={<Lobby />} />
          <Route path='lobby/create' element={<CreateMultiplayer />} />
          <Route path='lobby/:roomId' element={<LobbyMultiplayer />} />
          <Route path='game/:roomId' element={<GameMultiplayer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
