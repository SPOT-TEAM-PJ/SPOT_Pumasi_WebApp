import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import './App.css';
import 'antd/dist/antd.css';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import DesktopTop from './components/Desktop/Desktop_top';
import DesktopBottom from './components/Desktop/Desktop_bottom';

// pages
import LandingPage from './pages/LandingPage/LandingPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import OffererPage from './pages/OffererPage/OffererPage';
import ProfileEditPage from './pages/MyPage/ProfileEditPage';
import ProfilePage from './pages/MyPage/ProfilePage';
import OffererPost from './pages/OffererPage/section/OffererPost';
import MyPostList from './pages/MyPostList/MyPostList';
import LoginPage from './pages/LoginPage/LoginPage';
import MessagePage from './pages/MessagePage/MessagePage';
import ChatPage from './pages/MessagePage/ChatPage';

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
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/offerer' element={<OffererPage />} />
        <Route path='/offererpost' element={<OffererPost />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/edit' element={<ProfileEditPage />} />
        <Route path='/message' element={<MessagePage />} />
        <Route path='/chat' element={<ChatPage />} />
        <Route path='/mypostlist' element={<MyPostList />} />
      </Routes>
    );
  }

  return (
    <BrowserRouter>
      <Provider store={store()}>
        {parseInt(windowSize) <= 450 ? (
          <>
            <div className='App'>
              <Header />
              <AppRoutes />
            </div>
            <div className='navWrapper'>
              <Nav />
            </div>
          </>
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
              <Nav />
              <DesktopBottom />
            </div>
          </>
        )}
      </Provider>
    </BrowserRouter>
  );
}

export default App;
