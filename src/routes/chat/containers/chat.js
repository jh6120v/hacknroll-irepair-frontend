import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import Navigate from '../../../components/navigate';
import { FUNC_GO_BACK } from '../../../constants';
import { ContainerInner } from '../../../styles/layout-style';
import {
    Camera,
    ChatBar,
    ChatContainer,
    ChatContent,
    TypingBar,
    Sent,
    ChatBoxContainer,
    ChatBoxContent,
    Time,
    Avatar,
    Dialog,
    Author, Bubble
} from '../styles';
import avatar1 from '../../../assets/images/avatar-1.jpg';
import avatar2 from '../../../assets/images/avatar-2.jpg';
import ChatBox from "../chat-box";

const Chat = () => (
    <ContainerInner showNav>
        <Navigate title="自信補給站-群組" prev={FUNC_GO_BACK} />
        <ChatContainer>
            <ChatContent>
                <ChatBox
                    isSelf={false}
                    avatar={avatar1}
                    author="Salazar"
                    message="安安你好，你叫什麼名字"
                    time="12:00am"
                />
                <ChatBox
                    isSelf={false}
                    avatar={avatar2}
                    author="花花"
                    message="你的照片看起來好威啊😊"
                    time="12:02am"
                />
                <ChatBox
                    isSelf={true}
                    message="你們好喔，我是小明"
                    time="12:05am"
                />
            </ChatContent>
            <ChatBar>
                <Camera />
                <TypingBar>
                    <TextareaAutosize
                        minRows={1}
                        maxRows={5}
                        placeholder="say something..."
                        style={{ flex: '1 1 auto' }}
                    />
                </TypingBar>
                <Sent />
            </ChatBar>
        </ChatContainer>
    </ContainerInner>
);

export default Chat;
