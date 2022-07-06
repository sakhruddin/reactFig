import React from 'react';
import Ellipse from './Ellipse.png'

const Footer = () => {
  return (
    <div className='footer'>
     <div className='logoFooter'>
        <img src={Ellipse} alt='ellipse' />
        <span>ounter</span>
    </div>

    <ul>
      <li>Партнеры</li>
      <li>Разработчики</li>
      <li>Вакансии</li>
    </ul>

    <p>OOO "INTOCODE", 2020г</p>
    </div>
  );
};

export default Footer;