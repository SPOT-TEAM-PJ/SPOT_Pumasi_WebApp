import styled from 'styled-components';

//C8FFD4 B8E8FC B1AFFF

// SignUpPage

export const SignUpPageWrapper = styled.div`
  margin-top: 5px;
  padding-top: 2px;
  padding-bottom: 3px;
  background-color: #fdfdbd;
  width: 100%;
  color: rgb(83, 82, 82);
  border-radius: 10px;
`;

export const Title = styled.h4`
  margin: 13px 20px;
  color: black;
`;

export const Wrapper = styled.div`
  padding: 5px 10px;
  border-radius: 10px;
  margin: 5px 10px;
  background-color: #fff;
  box-shadow: 0px 8px 6px -6px #f0d662;
`;

export const NumberWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 8px;
  padding-left: 8%;
  margin-top: 6px;
`;

export const NumberSelectWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 3px;
`;

export const NumberSelect = styled.select`
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

export const NumberInput = styled.input`
  width: 30%;
  height: 25px;
  border-radius: 5px;
  border: solid 2px rgb(83, 82, 82);
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
  margin: 10px 0;
  margin-left: 10%;
  width: 40%;
`;

export const ProFileWrapper = styled.div`
  padding: 5px 10px;
  border: solid #f0d662 2px;
  border-radius: 10px;
  margin: 1px;
  box-shadow: 5px 8px 6px -6px #f0d662;
  margin-bottom: 15px;
`;

export const BtnWrapper = styled.div`
  width: 92%;
  margin: 15px 4%;
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
  cursor: pointer;
  :hover {
    box-shadow: 0 0 10px #f0d662;
  }
`;

// Input
export const InputWrapper = styled.div`
  width: 90%;
  padding-left: 10%;
  padding-top: 8px;
  margin-top: 5px;
`;

export const InputText = styled.input`
  // input창 밑부분만
  border: none;
  border-bottom: solid 2px rgb(83, 82, 82);

  // input창 있는거
  // border-bottom: solid gray 1px;
  // border: solid 2px rgb(83, 82, 82);
  // border-radius: 5px;

  margin-top: 3px;
  width: 100%;
  height: 25px;

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
  justify-content: center;
  align-items: left;
  width: 80%;
  padding: 8px 5%;
  margin-top: 5px;
  margin-left: 5%;
`;

export const GenderSelect = styled.select`
  border: solid rgb(83, 82, 82) 2px;
  border-radius: 5px;
  width: 60%;
  height: 30px;
  font-size: 15px;
  padding-left: 5%;
  color: rgb(83, 82, 82);
  :focus {
    outline: none !important;
    border-color: #f0d662;
    box-shadow: 0 0 10px #f0d662;
  }
`;
