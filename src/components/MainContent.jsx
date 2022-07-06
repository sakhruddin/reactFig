import React from 'react';

const MainContent = () => {
  return (
    <div className='main'>
      <div className="number">
        <span>0</span>
      </div>
      <div className="button">
        <button className='one'>Увеличить</button>
        <button className='two'>Уменьшить</button>
        <button className='three'>Сбросить</button>
      </div>
      
    </div>
  );
};

export default MainContent;
