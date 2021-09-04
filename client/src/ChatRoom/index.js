import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

import { IoIosSend } from 'react-icons/io';
import './styles.scss';

const socket = io('http://localhost:3001');

const ChatRoom = () => {
  const [inputMessage, setInputMessage] = useState(''); // message tapez dans l'input
  const [messagesList, setMessagesList] = useState([]); // la liste de tous les messages écrit
  const pseudo = 'Yannou';

  // reçoit les nouveaux message de socket.io
  useEffect(() => {
    socket.on('receive_message', (message) => {
      setMessagesList([...messagesList, message]);
    });
  }, [messagesList]);

  // submit d'un message : si input pas vide => ajoute le message à la liste et vide l'input
  const onInputMessageSubmit = (e) => {
    e.preventDefault();
    if (inputMessage) {
      setMessagesList([...messagesList, inputMessage]);
      setInputMessage('');

      socket.emit('send_message', inputMessage);
    }
  };

  // fake data

  return (
    <div className='chat-room'>
      {/* CHAT-BOX */}
      <div className='chat-box'>
        <div className='message-box'>
          {messagesList.map((m) => (
            <div className='bulle-message'>
              <span className='pseudo'>{pseudo}</span>
              <p className='message'>{m}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FORM */}
      <form onSubmit={onInputMessageSubmit}>
        <input
          className='input-message'
          type='text'
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button className='send-message' type='submit'>
          <IoIosSend className='arrowSend' />
        </button>
      </form>
    </div>
  );
};

export default ChatRoom;
