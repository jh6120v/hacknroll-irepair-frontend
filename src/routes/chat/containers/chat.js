import React, {
    useRef, useCallback, useEffect, useState, useMemo
} from 'react';
import Resizer from 'react-image-file-resizer';
import TextareaAutosize from 'react-textarea-autosize';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import useWebSocket from 'react-use-websocket';
import Navigate from '../../../components/navigate';
import { FUNC_GO_BACK } from '../../../constants';
import { ContainerInner } from '../../../styles/layout-style';
import {
    Camera,
    ChatBar,
    ChatContainer,
    ChatContent,
    TypingBar,
    Sent, ChatBarInner
} from '../styles';
import ChatBox from '../components/chat-box';
import { useModel, useTimer } from '../../../commons/hooks';
import Model from '../../../components/model';
import { history } from '../../../store';
import { messagePush, messageReset } from '../modules/chat-message';

const Chat = () => {
    const dispatch = useDispatch();
    const { message } = useSelector((state) => state.chatMessage);
    const { id, author, avatar } = useSelector((state) => state.personal);
    const [safeArea, setSafeArea] = useState({});
    const [toggleKeyboard, setToggleKeyboard] = useState(false);
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

    const timer = useTimer(30, 'backward', () => {
        showModal();
        inputNode.current.disabled = true;
    });

    const scrollBottom = useCallback(() => {
        console.log('scroll');

        setTimeout(() => {
            chatNode.current.scrollTop = chatNode.current.scrollHeight;
        }, 0);
    }, []);

    const didUnmount = useRef(false);

    const STATIC_OPTIONS = useMemo(() => ({
        onOpen: (e) => console.log(e),
        onMessage: (e) => {
            console.log(e.data);

            dispatch(messagePush({
                singleMessage: JSON.parse(e.data)
            }));

            scrollBottom();
        },
        onClose: (e) => console.log(e),
        onError: (e) => console.log(e),
        shouldReconnect: () => didUnmount.current === false,
    }), []);

    const [sendMessage] = useWebSocket('wss://dxl9ub4w15.execute-api.us-west-2.amazonaws.com/stage', STATIC_OPTIONS);

    useEffect(() => {
        if (author === 'Guest') {
            timer.setTimerState('started');
        }

        setSafeArea({
            sat: getComputedStyle(document.documentElement).getPropertyValue('--sat'),
            sar: getComputedStyle(document.documentElement).getPropertyValue('--sar'),
            sab: getComputedStyle(document.documentElement).getPropertyValue('--sab'),
            sal: getComputedStyle(document.documentElement).getPropertyValue('--sal')
        });

        return () => {
            didUnmount.current = true;

            timer.setTimerState('reset');

            dispatch(messageReset());
        };
    }, []);

    const sent = useCallback(() => {
        console.log('send');

        inputNode.current.focus();

        if (inputNode.current.value === '') {
            return false;
        }

        sendMessage(JSON.stringify({
            action: 'sendmessage',
            data: {
                id,
                author,
                avatar,
                message: inputNode.current.value,
                images: null,
                time: +moment()
            }
        }));

        inputNode.current.value = '';

        scrollBottom();

        return true;
    }, []);

    const fileChangedHandler = (event) => {
        let fileInput = false;
        if (event.target.files[0]) {
            fileInput = true;
        }

        if (fileInput) {
            Resizer.imageFileResizer(
                event.target.files[0],
                300,
                300,
                'JPEG',
                85,
                0,
                (uri) => {
                    sendMessage(JSON.stringify({
                        action: 'sendmessage',
                        data: {
                            id,
                            author,
                            avatar,
                            message: null,
                            images: uri,
                            time: +moment()
                        }
                    }));

                    scrollBottom();
                },
                'base64'
            );
        }
    };

    return (
        <ContainerInner style={{}}>
            <Navigate title="自信補給站-群組" prev={FUNC_GO_BACK} />
            <ChatContainer>
                <ChatContent ref={chatNode}>
                    {
                        message ? message.map((val) => (
                            <ChatBox
                                key={val.id + val.time}
                                isSelf={val.id === id}
                                avatar={`/assets/avatar/${val.avatar}`}
                                author={val.author}
                                message={val.message}
                                images={val.images}
                                time={moment(val.time).format('hh:mma')}
                            />
                        )) : null
                    }
                </ChatContent>
                <ChatBar>
                    <ChatBarInner>
                        <Camera safeArea={safeArea} toggleKeyboard={toggleKeyboard}>
                            <input type="file" onChange={fileChangedHandler} />
                        </Camera>
                        <TypingBar>
                            <TextareaAutosize
                                inputRef={inputNode}
                                minRows={1}
                                maxRows={5}
                                placeholder="say something..."
                                style={{
                                    flex: '1 1 auto',
                                    borderWidth: 0,
                                    borderRadius: '17.5px'
                                }}
                                onHeightChange={scrollBottom}
                                onFocus={() => {
                                    setToggleKeyboard(true);
                                    scrollBottom();
                                }}
                                onBlur={() => {
                                    setToggleKeyboard(false);
                                    scrollBottom();
                                }}
                            />
                        </TypingBar>
                        <Sent safeArea={safeArea} toggleKeyboard={toggleKeyboard} onClick={sent} />
                    </ChatBarInner>
                </ChatBar>
            </ChatContainer>
            <Model isShow={isShown}>
                <ModelBox />
            </Model>
        </ContainerInner>
    );
};

export default Chat;
