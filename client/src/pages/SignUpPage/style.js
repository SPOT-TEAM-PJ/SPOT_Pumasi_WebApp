import { Form, Input, Button, Select } from 'antd';
import styled from 'styled-components';
export const SignUpPage = styled(Form)`
  margin-top: 5px;
  padding-top: 2px;
  padding-bottom: 3px;
  background-color: #fdfdbd;
  width: 100%;
  color: rgb(83, 82, 82);
  border-radius: 10px;
`;
export const Wrapper = styled.div`
  padding-top: 5px;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 15px;
  border-radius: 10px;
  margin: 5px 10px;
  background-color: #fff;
  box-shadow: 0px 8px 6px -6px #f0d662;
`;
export const Item = styled(Form.Item)`
  margin: 5px 10px;
`;

export const Title = styled.h4`
  margin: 13px 5%;
  color: black;
`;

export const ProFileWrapper = styled.div`
  border: solid #f0d662 2px;
  margintop: 5px;
  border-radius: 10px;
  box-shadow: 0px 8px 6px -6px #f0d662;
  margin-bottom: 15px;
`;

export const InputArea = styled(Input)`
  border: none;
  border-bottom: solid 2px rgb(83, 82, 82);
  width: 95%;
  height: 25px;
  :focus {
    outline: none !important;
    border-color: #f0d662;
    box-shadow: 0 0 10px #f0d662;
  }
  :hover {
    outline: none !important;
    border-color: #f0d662;
    box-shadow: 0 0 10px #f0d662;
  }
`;

export const NumberSelect = styled(Select)`
  width: 30%;
  height: 25px;
  border-radius: 5px;
  border: solid 2px rgb(83, 82, 82);
  padding-left: 1%;
  :focus {
    outline: none !important;
    border-color: #f0d662;
    box-shadow: 0 0 10px #f0d662;
  }
`;
export const SelectOption = styled(Select.Option)`
  width: 10px;
  background-color: red;
`;

export const Btn = styled(Button)`
  margin: 15px 5%;
  width: 90%;
  height: 30px;
  font-size: 18px;
  background-color: yellow;
  border: none;
  box-shadow: 0px 8px 6px -6px #f0d662;
  cursor: pointer;
  :hover {
    box-shadow: 0 0 10px #f0d662;
    background-color: yellow;
    border: none;
    color: black;
  }
  :focus {
    background-color: yellow;
    border: none;
    color: black;
  }
`;
