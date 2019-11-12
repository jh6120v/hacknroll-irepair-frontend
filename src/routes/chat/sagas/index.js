import { takeEvery, all } from 'redux-saga/effects';
import {messageFetch} from '../modules/chat-message';
import { fetchChatMessage } from "./chat-message";

function* watchFetchSequenceListData() {
    yield takeEvery(messageFetch.type, fetchChatMessage);
}

export default function* rootSaga() {
    yield all([
        watchFetchSequenceListData()
    ]);
}