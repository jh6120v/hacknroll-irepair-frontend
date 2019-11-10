import styled, { css } from 'styled-components';
import camera from '../../../assets/images/camera.svg';
import sent from '../../../assets/images/sent.svg';
import tailLeft from '../../../assets/images/tail-left.svg';

const ChatContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 5px 18px 0 rgba(200,75,98,1);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  margin-top: 13px;
  height: calc(100vh - 44px - 13px - env(safe-area-inset-top));
  
  overflow: hidden;
`;

const ChatContent = styled.div`
  padding: 29px 15px 0 15px;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`;

const ChatBoxContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 13px;
`;

const ChatBoxContent = styled.div`
  display: flex;
  max-width: 80%;
  padding-right: 5px;
  flex-wrap: nowrap;
`;

const Time = styled.div`
  max-width: 20%;
  display: flex;
  align-items: flex-end;
  color: #f1828d;
  font-size: 11px;
  letter-spacing: .21px;
  line-height: 20px;
`;

const Avatar = styled.div`
  width: 47px;
  height: 47px;
  border-radius: 50%;
  ${(props) => (css`background-image: url(${props.image})`)};
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 11px;
  
`;

const Dialog = styled.div`
  display: flex;
  width: calc(100% - 58px);
  flex-wrap: wrap;
`;

const Author = styled.div`
  width: 100%;
  font-size: 13px;
  line-height: 25px;
  letter-spacing: .25px;
  color: #f1828d;
`;

const Bubble = styled.div`
  position: relative;
  width: 100%;
  min-height: 37px;
  padding: 8px 11px 8px 12px;
  border-radius: 18px;
  color: #1a1a1a;
  font-size: 16px;
  line-height: 21px;
  background-color: #f1f2f3;
  z-index: 1;
  &::after {
    content: '';
    position: absolute;
    left: -6px;
    top: -1px;
    width: 21px;
    height: 25px;
    background-image: url(${tailLeft});
    background-repeat: no-repeat;
    background-position: left top;
    z-index: -1;
  }
`;

const ChatBar = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  width: 100%;
  min-height: 70px;
  background-color: #f1828d;
  z-index: 3;
  padding: 15px 11px 18px 11px;
`;

const Camera = styled.div`
  width: 37px;
  height: 37px;
  background-image: url(${camera});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 31px 31px;
`;

const TypingBar = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 90px);
  overflow: hidden;
  background-color: #fff;
  border-radius: 17.5px;
  > textarea {
    width: 100%;
    padding: 8px 15px;
    color: #f1828d;
    font-size: 15px;
    line-height: 17px;
  }
  > ::placeholder {
    color: #f1828d;
    text-align: center;
  }
`;

const Sent = styled.div`
  width: 37px;
  height: 37px;
  background-image: url(${sent});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 31px 31px;
`;

export {
    ChatContainer,
    ChatContent,
    ChatBoxContainer,
    ChatBoxContent,
    Time,
    Avatar,
    Dialog,
    Author,
    Bubble,
    ChatBar,
    Camera,
    TypingBar,
    Sent
};
