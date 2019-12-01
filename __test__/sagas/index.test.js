import { expectSaga } from 'redux-saga-test-plan';
import { takeEvery } from 'redux-saga/effects';
import rootSage from '../../src/sagas';
import { IDBDelete, IDBSet } from '../../src/modules/indexed-db';
import { indexDBDel, indexDBSet } from '../../src/sagas/indexed-db';

describe('test entry of sagas.', () => {
    it('root saga must resolve all.', () => expectSaga(rootSage)
        .provide([
            [takeEvery(IDBSet.type, indexDBSet)],
            [takeEvery(IDBDelete.type, indexDBDel)]
        ])
        .run());
});
