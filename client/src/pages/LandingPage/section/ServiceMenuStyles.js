import styled from 'styled-components';
import { Button } from 'antd';

export const ServiceMenuWrapper = styled.div`
  margin-top: 10px;
  h2 {
  }
`;
export const MenuGrop = styled.div`
  background-color: #0096FF;
  padding: 10px;
  display: flex;
`;
export const InfoWrapper = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 65%;
  }
`;
export const ServiceList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
`;
export const ServiceButton = styled(Button)`
  width: 100%;
  border-radius: 20px;
  margin-top: 2px;
  margin-bottom: 2px;
  border: none;
  background-color: #E6BA95;
`;
