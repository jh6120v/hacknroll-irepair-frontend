import each from 'jest-each';
import chatMessageReducer, {
    messageFetch, messagePush, messageReset, messageSet
} from '../../../../src/routes/chat/modules/chat-message';
import { CHAT_INITIAL_MESSAGE } from '../../../../src/constants';

describe('test chat-message module.', () => {
    each([
        [
            'messageFetch',
            messageFetch,
            {
                type: '@@CHAT_MESSAGE/MESSAGE_FETCH',
                payload: {}
            }
        ],
        [
            'messageSet',
            messageSet,
            {
                type: '@@CHAT_MESSAGE/MESSAGE_SET',
                payload: {}
            }
        ],
        [
            'messagePush',
            messagePush,
            {
                type: '@@CHAT_MESSAGE/MESSAGE_PUSH',
                payload: {}
            }
        ],
        [
            'messageReset',
            messageReset,
            {
                type: '@@CHAT_MESSAGE/MESSAGE_RESET',
                payload: {}
            }
        ],
    ]).it('should dispatch %s action to send message.', (name, actionCreator, expected) => {
        expect(actionCreator()).toEqual(expected);
    });

    it('should merge messageSet and remove duplicated property when action is dispatched.', () => {
        const state = {
            message: [...CHAT_INITIAL_MESSAGE.message]
        };

        const newMessage = {
            message: [
                {
                    id: 'A0003',
                    author: 'A0003',
                    avatar: 'avatar-1.png',
                    message: 'message',
                    images: null,
                    time: 1573568899283
                }
            ]
        };

        const result = chatMessageReducer(state, messageSet({
            allMessage: newMessage.message
        }));

        expect(result).toEqual({
            message: [
                ...CHAT_INITIAL_MESSAGE.message,
                ...newMessage.message
            ]
        });

        const result2 = chatMessageReducer(state, messagePush({
            singleMessage: newMessage.message[0]
        }));

        expect(result2).toEqual({
            message: [
                ...CHAT_INITIAL_MESSAGE.message,
                ...newMessage.message
            ]
        });
    });

    it('should merge messageReset and remove duplicated property when action is dispatched.', () => {
        const state = {
            message: [...CHAT_INITIAL_MESSAGE.message]
        };

        const result = chatMessageReducer(state, messageReset());

        expect(result).toEqual(CHAT_INITIAL_MESSAGE);
    });
});
