import styled from 'styled-components';

const Form = styled.form`
  width: 100%;
  padding: 0 10%;
`;

const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 55px;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 20px;
  background-color: #fff;
`;

const InputText = styled.input`
  width: 100%;
  height: 35px;
  line-height: 35px;
  font-size: 18px;
  letter-spacing: .3px;
  color: #f1828d;
  text-align: center;
  border-width: 0;
  -webkit-text-fill-color: #f1828d;
  &::placeholder {
    color: #f1828d;
    text-align: center;
  }
`;

const ValidateErrorMsg = styled.div`
  width: 100%;
  color: #fff;
  text-align: center;
  padding-top: 10px;
`;

const ButtonGroup = styled(FormGroup)``;

const SubmitBtn = styled.button`
  width: 100%;
  height: 55px;
  font-size: 20px;
  letter-spacing: .33px;
  color: #fff;
  line-height: 55px;
  text-align: center;
  background-color: #ff6f89;
  box-shadow: 0 3px 15px 0 #d06a74;
  border: none;
  padding: 0;
`;

export {
    Form,
    FormGroup,
    InputGroup,
    InputText,
    ValidateErrorMsg,
    ButtonGroup,
    SubmitBtn
};
