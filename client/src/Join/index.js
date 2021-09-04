import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.scss';

const Join = ({
  handleOnSubmitUserRoom,
  setRoomName,
  roomName,
  userName,
  setUserName,
}) => {
  const history = useHistory();
  return (
    <div className='join'>
      <form
        onSubmit={(e) => {
          handleOnSubmitUserRoom(e);
          history.push('/chat');
        }}
      >
        <input
          type='text'
          name='user_name'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type='text'
          name='room_name'
          value={roomName}
          placeholder='room'
          onChange={(e) => setRoomName(e.target.value)}
        />
        <button type='submit'>Join</button>
      </form>
    </div>
  );
};

export default Join;
