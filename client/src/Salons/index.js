import './styles.scss';
const queryString = require('query-string');

const Salons = () => {
  const { room } = queryString.parse(window.location.search);

  return (
    <div className='salons-container'>
      <div className='salon'>{room}</div>
    </div>
  );
};

export default Salons;
