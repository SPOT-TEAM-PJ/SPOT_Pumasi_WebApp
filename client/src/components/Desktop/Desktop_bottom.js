import React from 'react';
import './Desktop.css';
const DesktopBottom = () => {
  return (
    <div className='Desktop_bottom'>
      <div className='Desktop_bottom_over'>
        <img
          className='Desktop_bottom_icon'
          alt='bottom'
          src='img/bottom1.png'
        />
        <img
          className='Desktop_bottom_icon'
          alt='bottom'
          src='img/bottom2.png'
        />
        <img
          className='Desktop_bottom_icon'
          alt='bottom'
          src='img/bottom3.png'
        />
        <img
          className='Desktop_bottom_icon'
          alt='bottom'
          src='img/bottom4.png'
        />
        <img
          className='Desktop_bottom_icon'
          alt='bottom'
          src='img/bottom5.png'
        />
      </div>
      <div className='Desktop_bottom_under'></div>
    </div>
  );
};

export default DesktopBottom;
