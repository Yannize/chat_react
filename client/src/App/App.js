import { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Join from '../Join';
import Chat from '../Chat';

import './App.scss';

function App() {
  const [roomName, setRoomName] = useState('');
  const [username, setUserName] = useState('');
  const [rooms, setRooms] = useState([]); // nouvelle room left section

  const handleOnSubmitUserRoom = (e) => {
    e.preventDefault();
    setRooms([...rooms, roomName]);
  };

  return (
    <div className='App'>
      <BrowserRouter>
        <Route exact path='/'>
          <Join
            handleOnSubmitUserRoom={handleOnSubmitUserRoom}
            roomName={roomName}
            setRoomName={setRoomName}
            username={username}
            setUserName={setUserName}
          />
        </Route>

        <Route exact path='/chat'>
          <Chat rooms={rooms} roomName={roomName} />
        </Route>
      </BrowserRouter>
    </div>
  );
}
export default App;
