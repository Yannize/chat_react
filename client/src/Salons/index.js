import { useState } from 'react';
import './styles.scss';

const Salons = ({ rooms }) => {
  return (
    <div className='salons-container'>
      {rooms.map((room) => (
        <div className='salon'>{room}</div>
      ))}
    </div>
  );
};

export default Salons;
