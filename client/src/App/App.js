import { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Join from '../Join';
import Chat from '../Chat';

import './App.scss';

function App() {
  const [roomName, setRoomName] = useState('');
  const [userName, setUserName] = useState('');

  const handleOnSubmitUserRoom = (e) => {
    e.preventDefault();
  };

  return (
    <div className='App'>
      <BrowserRouter>
        <Route exact path='/'>
          <Join
            handleOnSubmitUserRoom={handleOnSubmitUserRoom}
            roomName={roomName}
            setRoomName={setRoomName}
            userName={userName}
            setUserName={setUserName}
          />
        </Route>

        <Route exact path='/chat'>
          <Chat />
        </Route>
      </BrowserRouter>
    </div>
  );
}
export default App;
