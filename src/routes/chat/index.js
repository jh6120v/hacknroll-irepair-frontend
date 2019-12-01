import Chat from './containers/chat';
import { injectReducer } from '../../store/reducers';
import chatMessageReducer from './modules/chat-message';
import { history, store } from '../../store';

// reducer
injectReducer(history, store, [
    { key: 'chatMessage', reducer: chatMessageReducer }
]);

export default Chat;
