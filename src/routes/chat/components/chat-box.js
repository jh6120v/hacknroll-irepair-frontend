import React from 'react';
import { Author, Avatar, Bubble, ChatBoxContainer, ChatBoxContent, Dialog, Time } from "../styles";
import { ThemeProvider } from "styled-components";

const ChatBox = ({ isSelf, avatar, author, message, time }) => {
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
                        <Bubble>{message}</Bubble>
                    </Dialog>
                </ChatBoxContent>
                <Time>{time}</Time>
            </ChatBoxContainer>
        </ThemeProvider>
    );
};

export default ChatBox;