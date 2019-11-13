import styled, { css } from 'styled-components';
import camera from '../../../assets/images/camera.svg';
import sent from '../../../assets/images/sent.svg';
import tailLeft from '../../../assets/images/tail-left.svg';
import tailRight from '../../../assets/images/tail-right.svg';

const ChatContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-content: flex-start;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 5px 18px 0 rgba(200,75,98,1);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  //margin-top: 13px;
  height: calc(100vh - 44px - env(safe-area-inset-top));
  overflow: hidden;
  overflow-scrolling: touch;
`;

const ChatContent = styled.div`
  height: 77vh;
  padding: 29px 15px 0 15px;
  flex: 1 1 auto;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  align-content: flex-start;
`;

const ChatBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  overflow-x: hidden;
`;

const ChatBoxContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 13px;
  align-self: flex-start;
  ${(props) => {
        if (props.theme.isSelf) {
            return css`
          flex-direction: row-reverse;
        `;
        }
    }}
`;

const ChatBoxContent = styled.div`
  display: flex;
  max-width: 80%;
  flex-wrap: nowrap;
  padding: ${(props) => (props.theme.isSelf ? '0 0 0 5px' : '0 5px 0 0')};
`;

const Time = styled.div`
  max-width: 20%;
  display: flex;
  align-items: flex-end;
  color: #f1828d;
  font-size: 11px;
  letter-spacing: .21px;
  font-weight: 300;
`;

const Avatar = styled.div`
  width: 47px;
  height: 47px;
  border-radius: 50%;
  ${(props) => (css`background-image: url(${props.image})`)};
  background-repeat: no-repeat;
  background-size: cover;
`;

const Dialog = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: ${(props) => (props.theme.isSelf ? '100%' : 'calc(100% - 58px)')};
  ${(props) => {
        if (props.theme.isSelf) {
            return css`
              width: 100%;
              margin-right: 5px;
            `;
        }

        return css`
          width: calc(100% - 58px);
          margin-left: 11px;
        `;
    }};
`;

const Author = styled.div`
  width: 100%;
  font-size: 13px;
  line-height: 25px;
  letter-spacing: .25px;
  color: #f1828d;
  font-weight: 300;
`;

const Bubble = styled.div`
  position: relative;
  width: 100%;
  min-height: 37px;
  border-radius: 18px;
  font-size: 16px;
  line-height: 21px;
  z-index: 1;
  white-space: pre-line;
  ${(props) => {
        if (props.theme.isSelf) {
            return css`
          padding: 8px 12px 8px 11px;
          margin-right: 5px;
          color: #fff;
          background-color: #f1828d;
        `;
        }
        return css`
          padding: 8px 11px 8px 12px;
          color: #1a1a1a;
          background-color: #f1f2f3;
        `;
    }};
  &::after {
    content: '';
    position: absolute;
    ${(props) => {
        if (props.theme.isSelf) {
            return css`
              right: -7px;
              top: -8px;
              background-image: url(${tailRight});
              background-position: right top;
            `;
        }
        return css`
              left: -6px;
              top: -1px;
              background-image: url(${tailLeft});
              background-position: left top;
            `;
    }};
    width: 21px;
    height: 25px;
    background-repeat: no-repeat;
    z-index: -1;
  }
`;

const Img = styled.div`
  width: 100%;
  & > img {
    max-width: 100%;
    height: auto;
  }
`;

const ChatBar = styled.div`
  display: flex;
  width: 100%;
  background-color: #f1828d;
  z-index: 3;
  padding: 0 11px;  
`;

const ChatBarInner = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
  justify-content: space-around;
  align-items: center;
  margin-top: 15px;
  margin-bottom: ${(props) => props.toggleKeyboard || props.safeArea.sab === '0px' ? '18px' : 'env(safe-area-inset-bottom)'};
`;

const Camera = styled.div`
  flex: 1 1 auto;
  width: 37px;
  height: 37px;
  background-image: url(${camera});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 31px 31px;
  overflow: hidden;
  & > input {
    opacity: 0;
    height: 100%;
  }
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
  flex: 1 1 auto;
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
    ChatBody,
    Time,
    Avatar,
    Dialog,
    Author,
    Bubble,
    Img,
    ChatBar,
    ChatBarInner,
    Camera,
    TypingBar,
    Sent
};
