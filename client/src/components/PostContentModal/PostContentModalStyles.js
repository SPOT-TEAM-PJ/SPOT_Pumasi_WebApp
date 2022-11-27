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
  background-color: #0096ff;
  height: 35px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  color: #fff;
  .modalClose {
    cursor: pointer;
  }
`;

export const ChildrenImgArea = styled.div`
  width: 100%;
  aspect-ratio: 1280/853;
  background-color: beige;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
export const ContentArea = styled.div`
  background-color: #e2e2e2;
  width: 100%;
  padding-top: 10px;
  padding-left: 7px;
  padding-right: 7px;
  padding-bottom: 10px;
`;
export const PostTitle = styled.div`
  text-align: center;
  margin-bottom: 5px;
`;
export const NickName = styled.div`
  text-align: right;
  margin-right: 10px;
  margin-bottom: 5px;
`;
export const PostInfo = styled.table`
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 20px;
  img {
    width: 15px;
    aspect-ratio: 1/1;
    margin-right: 5px;
  }
  .column {
    width: 60px;
    color: #0096ff;
    border-right: 2px #808080 solid;
    padding-left: 3px;
    padding-right: 3px;
  }
  .lastTr {
    border-bottom: 2px #808080 solid;
  }
  .data {
    padding-left: 5px;
    display: flex;
    align-items: center;
  }
`;
export const ContentTitle = styled.div`
  color: #323232;
  font-size: 0.9rem;
  margin-bottom: 5px;
`;
export const PostContent = styled.div`
  margin-bottom: 20px;
  .textArea {
    width: 100%;
    border-radius: 5px;
  }
`;
export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
