import Chat from './containers/chat';
import { injectReducer } from '../../store/reducers';
import chatMessageReducer from './modules/chat-message'
import { history, store, sagaMiddleware } from '../../store';
import rootSaga from './sagas';

// reducer
injectReducer(history, store, [
    { key: 'chatMessage', reducer: chatMessageReducer }
]);

sagaMiddleware.run(rootSaga);

export default Chat;
