import styled from 'styled-components';
import { Button } from 'antd';

export const PostContent = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  padding-bottom: 5px;
  border-bottom: solid 2px darkgray;
  margin-bottom: 10px;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
`;
export const ContentTypeImage = styled.div`
  aspect-ratio: 1/1;
  background-color: #c8ffd4;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  overflow: hidden;
  img {
    width: 60%;
  }
`;
export const ContentItem = styled.div`
  width: 80%;
  border-radius: 15px;
  display: flex;
  overflow: hidden;
  border: solid 1px #000;
`;
export const ContentTitle = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
`;
export const ContentDate = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  font-size: 0.7rem;
`;
export const ContentRequest = styled(Button)`
  width: 20%;
  height: 100%;
  border: none;
`;
