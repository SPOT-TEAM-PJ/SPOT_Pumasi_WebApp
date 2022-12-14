import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import "antd/dist/antd.css";

import Header from './components/Header/Header';

import DesktopTop from './components/Desktop/Desktop_top';
import DesktopBottom from './components/Desktop/Desktop_bottom';

// pages
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
  // resize event를 통해 반응형웹 구현
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  // route 중복 제거
  function AppRoutes() {
    return (
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
    );
  }

  return (
    <BrowserRouter>
      {parseInt(windowSize) <= 450 ? (
        <div className='App'>
          <Header />
          <AppRoutes />
        </div>
      ) : (
        <>
          <div className='Desktop_info'>
            안녕하세요 방문해주셔서 감사합니다.
            <br />
            태블릿과 데스크탑 화면은 구현 예정입니다.
          </div>
          <div className='Desktop_wrapper'>
            <DesktopTop />
            <div className='App'>
              <Header />
              <AppRoutes />
            </div>
            <DesktopBottom />
          </div>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
