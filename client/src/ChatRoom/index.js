import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

import { IoIosSend } from 'react-icons/io';
import './styles.scss';
const queryString = require('query-string');

const socket = io('http://localhost:3001');

let countId = 0;

const ChatRoom = () => {
  const { pseudo } = queryString.parse(window.location.search);

  const [inputMessage, setInputMessage] = useState(''); // message tapez dans l'input
  const [messagesList, setMessagesList] = useState([]); // la liste de tous les messages écrit

  useEffect(() => {
    socket.on('receive_message', (message) => {
      console.log(message);
      setMessagesList([...messagesList, message]);
    });

    return () => {
      socket.off();
    };
  }, [messagesList]);

  // submit d'un message : si input pas vide => ajoute le message à la liste et vide l'input
  const onInputMessageSubmit = (e) => {
    e.preventDefault();

    if (inputMessage) {
      setMessagesList([
        ...messagesList,
        { message: inputMessage, pseudo, id: `${countId}${pseudo}` },
      ]);
      setInputMessage('');
      socket.emit('send_message', {
        message: inputMessage,
        pseudo,
        id: `${countId}${pseudo}`,
      });
    }

    countId++;
  };

  return (
    <div className='chat-room'>
      <div className='chat-box'>
        <div className='message-box'>
          {messagesList.map((m) => (
            <div key={m.id} className='bulle-message'>
              <span className='pseudo'>{m.pseudo}</span>
              <p className='message'>{m.message}</p>
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
