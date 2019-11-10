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

const Chat = () => (
    <ContainerInner showNav>
        <Navigate title="自信補給站-群組" prev={FUNC_GO_BACK} />
        <ChatContainer>
            <ChatContent>
                <ChatBoxContainer>
                    <ChatBoxContent>
                        <Avatar image={avatar1} />
                        <Dialog>
                            <Author>Salazar</Author>
                            <Bubble>安安你好，你叫什麼名字</Bubble>
                        </Dialog>
                    </ChatBoxContent>
                    <Time>12:00am</Time>
                </ChatBoxContainer>
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
