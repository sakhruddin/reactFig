import React from 'react';
import Ellipse from './Ellipse.png'
const Header = () => {
  return (
    <div className='header'>
      <div className='logo'> 
        <img src={Ellipse} alt='ellipse' />
        <span>ounter</span>
      </div>
      <div className='text'>
        <p> Главная </p>
        <p> О нас </p>
        <p> Контакты </p>
      </div>
    </div>
  );
}

export default Header;
