import React, { useRef, useCallback, useEffect } from 'react';
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
    Sent
} from '../styles';
import avatar1 from '../../../assets/images/avatar-1.png';
import avatar2 from '../../../assets/images/avatar-2.png';
import avatar3 from '../../../assets/images/avatar-3.png';
import avatar4 from '../../../assets/images/avatar-4.png';
import avatar5 from '../../../assets/images/avatar-5.png';
import ChatBox from '../chat-box';
import { useModel, useTimer } from '../../../commons/hooks';
import Model from '../../../components/model';
import { history } from '../../../store';

const Chat = () => {
    const linkTo = useCallback((url) => history.push(url), []);
    const chatNode = useRef();
    const inputNode = useRef();

    const {
        ModelBox, isShown, showModal, hideModal
    } = useModel('還不夠滿足嗎？', ' 立即註冊即能進入完全模式', useCallback(() => {
        linkTo('register');
        hideModal();
    }, []), '註冊', useCallback(() => {
        linkTo('/');
        hideModal();
    }, []), '忍痛離開');

    const timer = useTimer(10, 'backward', () => {
        showModal();
        inputNode.current.disabled = true;
    });

    useEffect(() => {
        timer.setTimerState('started');

        return () => {
            timer.setTimerState('reset');
        };
    }, [timer]);

    return (
        <ContainerInner showNav>
            <Navigate title="自信補給站-群組" prev={FUNC_GO_BACK} />
            <ChatContainer>
                <ChatContent ref={chatNode}>
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
                        isSelf
                        message="你們好喔，我是小明"
                        time="12:05am"
                    />
                    <ChatBox
                        isSelf={false}
                        avatar={avatar3}
                        author="航海王"
                        message="你好啊小帥哥，連名字都可以這麼威啊～"
                        time="12:05am"
                    />
                    <ChatBox
                        isSelf={false}
                        avatar={avatar4}
                        author="烏魯魯"
                        message="就是啊！小明，你一定有很多朋友吧！👏👏"
                        time="12:06am"
                    />
                    <ChatBox
                        isSelf={false}
                        avatar={avatar5}
                        author="Salazar"
                        message="連我都忍不住想要見你了～😊"
                        time="12:07am"
                    />
                    <ChatBox
                        isSelf
                        message="我充滿正面能量了💪"
                        time="12:10am"
                    />
                </ChatContent>
                <ChatBar>
                    <Camera />
                    <TypingBar>
                        <TextareaAutosize
                            inputRef={inputNode}
                            minRows={1}
                            maxRows={5}
                            placeholder="say something..."
                            style={{ flex: '1 1 auto' }}
                            onHeightChange={() => {
                                chatNode.current.scrollTop = chatNode.current.clientHeight;
                            }}
                        />
                    </TypingBar>
                    <Sent />
                </ChatBar>
            </ChatContainer>
            <Model isShow={isShown}>
                <ModelBox />
            </Model>
        </ContainerInner>
    );
};

export default Chat;
