import Salons from '../Salons';
import ChatRoom from '../ChatRoom';

import './styles.scss';

const Chat = () => {
  return (
    <div className='chat'>
      <Salons />
      <ChatRoom />
    </div>
  );
};

export default Chat;
