import React from 'react';
import './Desktop.css';

const DesktopTop = () => {
  return (
    <div className='Desktop_top'>
      <div className='Desktop_top_notch'>
        <div className='Desktop_notch_left'>
          <p>11:11</p>
        </div>
        <div className='Desktop_notch_center'></div>
        <div className='Desktop_notch_right'>
          <img className='Desktop_top_icon' alt='notch' src='img/top1.png' />
          <img className='Desktop_top_icon' alt='notch' src='img/top5.png' />
        </div>
      </div>
      <div className='Desktop_top_bar'>
        <img className='Desktop_top_icon' alt='notch' src='img/top2.png' />
        <p>www.pumasi.com</p>
        <img className='Desktop_top_icon' alt='notch' src='img/top4.png' />
      </div>
    </div>
  );
};

export default DesktopTop;
