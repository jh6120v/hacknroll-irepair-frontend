import { call, put } from 'redux-saga/effects';
import { spinnerHide, spinnerShow } from "../../../modules/spinner";
import { getChatMessage } from "./api";
import { IDBSet } from "../../../modules/indexed-db";
import { CHAT_MESSAGE } from "../../../constants";
import { messageSet } from "../modules/chat-message";

export function* fetchChatMessage() {
    try {
        yield put(spinnerShow());

        const response = yield call(getChatMessage);

        // save to indexedDb
        yield put(IDBSet({
            key: CHAT_MESSAGE,
            value: response
        }));

        // 存入 redux
        yield put(messageSet({
            allMessage: response
        }));

        yield put(spinnerHide());
    } catch (e) {
        yield put(spinnerHide());
    }
}