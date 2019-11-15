import { createActionCreator } from '../../../commons/utils';
import { createReducer } from '../../../store/reducers';
import { CHAT_INITIAL_MESSAGE } from '../../../constants';

// Actions
const actionCreator = createActionCreator('@@CHAT_MESSAGE');
const messageFetch = actionCreator('MESSAGE_FETCH');
const messageSet = actionCreator('MESSAGE_SET');
const messagePush = actionCreator('MESSAGE_PUSH');
const messageReset = actionCreator('MESSAGE_RESET');

export {
    messageFetch, messageSet, messagePush, messageReset
};


// Reducers
const initialState = {
    message: [...CHAT_INITIAL_MESSAGE.message]
};

const handlers = {
    [messageSet.type]: (state, { payload: { allMessage } }) => ({
        ...state,
        message: [...state.message, ...allMessage]
    }),
    [messagePush.type]: (state, { payload: { singleMessage } }) => {
        // 加一筆新的在最後面
        state.message.push(singleMessage);

        return {
            ...state,
            message: state.message
        };
    },
    [messageReset.type]: (state) => ({
        ...state,
        message: [...CHAT_INITIAL_MESSAGE.message]
    })
};

const reducers = createReducer(initialState, handlers);
export default reducers;
