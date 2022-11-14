import styled, { keyframes } from 'styled-components';

export const Presentation = styled.div`
  z-index: 1200;
  position: absolute;
`;
export const WrapperModal = styled.div`
  position: fixed;
  inset: 0px;
  background-color: rgb(0 0 0 / 71%);
  -webkit-tap-highlight-color: transparent;
  display: flex;
  justify-content: center;
`;
export const Modal = styled.div`
  position: relative;
  width: 80%;
  height: 80%;
  box-shadow: 0px 3px 3px -1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  background-color: #fefefe;
  overflow: scroll;
  transition: all 400ms ease-in-out 2s;
  animation: fadeIn 400ms;
  border-radius: 20px;
  margin-top: 40px;
  margin-bottom: 40px;

  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
    visibility: hidden;
  }
`;
export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;
export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;

  .modalClose {
    cursor: pointer;
  }
`;
export const ChildrenImgArea = styled.div`
  width: 70%;
  aspect-ratio: 1/1;
  background-color: beige;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;
export const ContentArea = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  background-color: beige;
  border-radius: 10px;
  padding: 10px;

  .postTitle {
    width: 100%;
    height: 30px;
    background-color: #fff;
    border-radius: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;

  .nameInput {
    width: 47%;
    height: 30px;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const PostInfo = styled.div`
  .postInfo {
    float: right;
  }
`;
export const ContentInfo = styled.div``;

export const ServiceTypeArea = styled.div`
  .ant-radio-group {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
  .ant-radio-button-wrapper {
    border-radius: 10px;
    border: none;
  }
  .ant-radio-button-wrapper::before {
    width: 0;
  }
`;

export const MoveArea = styled.div`
  display: flex;
  width: 100%;
  .needCarWrapper {
    text-align: center;
    width: 20%;
  }
  .carToggle {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .cascaderWrapper {
    text-align: center;
    width: 35%;
    .Cascader {
      width: 100%;
    }
  }
  .arrowWrapper {
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
    }
  }
`;
