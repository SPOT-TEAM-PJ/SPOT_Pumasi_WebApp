import { Form, Button } from 'antd';
import styled from 'styled-components';

export const Logo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 30px;
  img {
    width: 70%;
  }
`;
export const LoginForm = styled(Form)`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;
export const FormItem = styled(Form.Item)`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  background-color: aliceblue;

  .ant-col {
    max-width: 100%;
    width: 100% !important;
    margin: 0;
  }
  .ant-form-item-control-input {
    width: 100% !important;
    max-width: 100% !important;
  }
`;
export const LoginBtn = styled(Button)`
  width: 100%;
  margin: 0;
`;

export const SignUp = styled.div`
  text-align: center;
  p {
    font-size: 0.6rem;
    color: #808080;
  }
`;
