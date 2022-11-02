import styled from 'styled-components';

//C8FFD4 B8E8FC B1AFFF

// SignUpPage

export const SignUpPageWrapper = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #fdfdbd;
  width: 450px;
  color: rgb(83, 82, 82);
`;

export const Title = styled.h4`
  margin: 15px 20px;
  color: black;
`;
export const Wrapper = styled.div`
  padding: 20px 10px;
  border-radius: 10px;
  margin: 25px 20px;
  background-color: #fff;
  box-shadow: 0px 8px 6px -6px #f0d662;
`;

export const NumberWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top:8px;
  padding-left:10%;
  padding-right:10%
  margin-top: 6px;
`;

export const NumberSelectWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 3px;
`;

export const NumberSelect = styled.select`
  width: 25%;
  height: 29px;
  border-radius: 5px;
  border: solid 2px rgb(83, 82, 82);
  padding-left: 12px;
  :focus {
    outline: none !important;
    border-color: #f0d662;
    box-shadow: 0 0 10px #f0d662;
  }
`;

export const NumberInput = styled.input`
  width: 35%;
  height: 25px;
  border-radius: 5px;
  border: solid 2px rgb(83, 82, 82);
  padding-left: 12px;
  :focus {
    outline: none !important;
    border-color: #f0d662;
    box-shadow: 0 0 10px #f0d662;
  }
`;

export const FileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10%;
  padding-top: 15px;
  width: 25%;
`;

export const ProFileWrapper = styled.div`
  padding: 20px 20px;
  border: solid #f0d662 2px;
  background-color: #efd978;
  border-radius: 10px;
  margin: 10px;
`;

export const BtnWrapper = styled.div`
  width: 90%;
  margin: 10px 22px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SignUpButton = styled.button`
  width: 100%;
  height: 30px;
  font-size: 18px;
  background-color: yellow;
  border: none;
  box-shadow: 0px 8px 6px -6px #f0d662;
  margin-bottom: 20px;
  cursor: pointer;
  :hover {
    box-shadow: 0 0 10px #f0d662;
  }
`;

// Input
export const InputWrapper = styled.div`
  width: 80%;
  padding: 8px 10%;
  margin-top: 5px;
`;

export const InputText = styled.input`
  margin-top: 3px;
  border-radius: 5px;
  width: 100%;
  height: 25px;
  border: 0;
  border: solid 2px rgb(83, 82, 82);
  :focus {
    outline: none !important;
    border-color: #f0d662;
    box-shadow: 0 0 10px #f0d662;
  }
`;

// ChildInformation

export const GenderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  width: 81%;
  padding: 8px 10%;
  margin-top: 5px;
`;

export const GenderSelect = styled.select`
  border: solid rgb(83, 82, 82) 2px;
  border-radius: 5px;
  width: 50%;
  height: 30px;
  font-size: 15px;
  padding-left: 18%;
  color: rgb(83, 82, 82);
  :focus {
    outline: none !important;
    border-color: #f0d662;
    box-shadow: 0 0 10px #f0d662;
  }
`;
