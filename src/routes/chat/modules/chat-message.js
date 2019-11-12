import { createActionCreator } from '../../../commons/utils';
import { createReducer } from '../../../store/reducers';

// Actions
const actionCreator = createActionCreator('@@CHAT_MESSAGE');
const messageFetch = actionCreator('MESSAGE_FETCH');
const messageSet = actionCreator('MESSAGE_SET');
const messagePush = actionCreator('MESSAGE_PUSH');

export { messageFetch, messageSet, messagePush };


// Reducers
const initialState = {
    message: []
};

const handlers = {
    [messageSet.type]: (state, { payload: { allMessage } }) => {
        return {
            ...state,
            message: allMessage
        };
    },
    [messagePush.type]: (state, { payload: { singleMessage } }) => {
        // 加一筆新的在最後面
        state.message.push(singleMessage);

        return {
            ...state,
            message: state.message
        };
    }
};

const reducers = createReducer(initialState, handlers);
export default reducers;
