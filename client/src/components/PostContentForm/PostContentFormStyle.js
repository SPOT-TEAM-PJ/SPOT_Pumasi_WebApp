import { Form } from 'antd';
import styled from 'styled-components';
export const FormWrapper = styled(Form)`
  padding-left: 10px;
  padding-right: 10px;
`;
export const ChildImageForm = styled(Form.Item)`
  text-align: right;
  img {
    width: 100%;
  }
`;
export const FormItem = styled(Form.Item)`
  padding-top: 10px;
  border-top: 3px solid #d3d3d3;
`;
