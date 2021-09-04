import Salons from '../Salons';
import ChatRoom from '../ChatRoom';

import './styles.scss';

const Chat = ({ rooms }) => {
  return (
    <div className='chat'>
      <Salons rooms={rooms} />
      <ChatRoom />
    </div>
  );
};

export default Chat;
