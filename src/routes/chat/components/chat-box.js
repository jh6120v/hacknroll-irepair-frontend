import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
    Author, Avatar, Bubble, ChatBoxContainer, ChatBoxContent, Dialog, Img, Time
} from '../styles';

const ChatBox = ({
    isSelf, avatar, author, message, images, time
}) => {
    const theme = isSelf ? {
        isSelf: true
    } : {
        isSelf: false
    };

    return (
        <ThemeProvider theme={theme}>
            <ChatBoxContainer>
                <ChatBoxContent>
                    {
                        isSelf ? null : <Avatar image={avatar} />
                    }
                    <Dialog>
                        {
                            isSelf ? null : <Author>{author}</Author>
                        }
                        {
                            images ? (
                                <Img>
                                    <img src={images} />
                                </Img>
                            ) : <Bubble>{message}</Bubble>
                        }
                    </Dialog>
                </ChatBoxContent>
                <Time>{time}</Time>
            </ChatBoxContainer>
        </ThemeProvider>
    );
};

export default ChatBox;
