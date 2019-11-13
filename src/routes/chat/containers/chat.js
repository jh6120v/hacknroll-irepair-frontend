import React, {
 useRef, useCallback, useEffect, useState
} from 'react';
import Resizer from 'react-image-file-resizer';
import TextareaAutosize from 'react-textarea-autosize';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import Navigate from '../../../components/navigate';
import { FAKE_DATA, FUNC_GO_BACK } from '../../../constants';
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
import { useMockData, useModel, useTimer } from '../../../commons/hooks';
import Model from '../../../components/model';
import { history } from '../../../store';
import { messageFetch, messagePush, messageReset, messageSet } from '../modules/chat-message';

const Chat = () => {
    const dispatch = useDispatch();
    const { message } = useSelector((state) => state.chatMessage);
    const [safeArea, setSafeArea] = useState({});
    const [toggleKeyboard, setToggleKeyboard] = useState(false);
    const linkTo = useCallback((url) => history.push(url), []);
    const chatNode = useRef();
    const inputNode = useRef();

    const scrollBottom = useCallback(() => {
        console.log('scroll');

        setTimeout(() => {
            chatNode.current.scrollTop = chatNode.current.scrollHeight;
        }, 0);
    }, []);

    useEffect(() => {
        dispatch(messageFetch());

        return () => {
            dispatch(messageReset());
        };
    }, []);

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

    useEffect(() => {
        timer.setTimerState('started');

        setSafeArea({
            sat: getComputedStyle(document.documentElement).getPropertyValue('--sat'),
            sar: getComputedStyle(document.documentElement).getPropertyValue('--sar'),
            sab: getComputedStyle(document.documentElement).getPropertyValue('--sab'),
            sal: getComputedStyle(document.documentElement).getPropertyValue('--sal')
        });

        return () => {
            timer.setTimerState('reset');
        };
    }, []);

    const { mockState, setMockState } = useMockData(FAKE_DATA, scrollBottom);

    const sent = useCallback(() => {
        console.log('send');

        inputNode.current.focus();

        if (inputNode.current.value === '') {
            return false;
        }

        dispatch(messagePush({
            singleMessage: {
                id: 'A000',
                author: 'James',
                avatar: 'avatar-1.png',
                message: inputNode.current.value,
                images: null,
                time: +moment()
            }
        }));

        inputNode.current.value = '';

        scrollBottom();

        if (mockState === 'yet') {
            setMockState('done');
        }
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
                100,
                0,
                (uri) => {
                    dispatch(messagePush({
                        singleMessage: {
                            id: 'A000',
                            author: 'James',
                            avatar: 'avatar-1.png',
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
                                isSelf={val.id === 'A000'}
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
                    <ChatBarInner safeArea={safeArea} toggleKeyboard={toggleKeyboard}>
                        <Camera>
                            <input type="file" onChange={fileChangedHandler} />
                        </Camera>
                        <TypingBar>
                            <TextareaAutosize
                                inputRef={inputNode}
                                minRows={1}
                                maxRows={5}
                                placeholder="say something..."
                                style={{ flex: '1 1 auto', borderWidth: 0, borderRadius: '17.5px' }}
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
                        <Sent onClick={sent} />
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
