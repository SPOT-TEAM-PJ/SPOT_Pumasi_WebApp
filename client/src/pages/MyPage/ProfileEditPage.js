import React, { useRef, useState } from 'react';
import SignUpInfo from '../SignUpPage/section/SignUpInfo';
import { Avatar } from 'antd';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
// import { dummyData } from '../../util/dummyData/dummyData';

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileEditPage = () => {
  const {me} = useSelector((state)=>state.user);
  const [Image, setImage] = useState(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  );
  // const User = dummyData()[0];
  // const [File, setFile] = useState('');

  // const fileInput = useRef(null);

  // const onChange = (e) => {
  //   if (e.target.files[0]) {
  //     setFile(e.target.files[0]);
  //   } else {
  //     //업로드 취소할 시
  //     setImage(
  //       'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  //     );
  //     return;
  //   }
  //   //화면에 프로필 사진 표시
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     if (reader.readyState === 2) {
  //       setImage(reader.result);
  //     }
  //   };
  //   reader.readAsDataURL(e.target.files[0]);
  // };

  return (
    <div>
      <ImageWrapper>
        <Avatar
          src={Image}
          style={{ margin: '20px 20%' }}
          size={160}
          // onClick={() => {
          //   fileInput.current.click();
          // }}
        />
        {/* <input
          type='file'
          style={{ display: 'none' }}
          //accept='image/jpg,impge/png,image/jpeg'
          name='profile_img'
          onChange={onChange}
          ref={fileInput}
        /> */}
      </ImageWrapper>
      <SignUpInfo title1={'가입 정보'} title2={'나의 정보'} User={me} />
    </div>
  );
};

export default ProfileEditPage;
