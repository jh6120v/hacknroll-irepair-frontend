import { hot } from 'react-hot-loader/root';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import rootSaga from '../sagas';
import { store, history, sagaMiddleware } from '../store';
import Routes from '../routes';
import Spinner from '../components/spinner';
import { injectReducer } from '../store/reducers';
import spinnerReducer from '../modules/spinner';
import modelReducer from '../modules/model';
import { Container, Wrapper } from '../styles/layout-style';

injectReducer(history, store, [
    { key: 'spinner', reducer: spinnerReducer },
    { key: 'model', reducer: modelReducer }
]);

const App = () => {
    const dispatch = useDispatch();
    const { isShow } = useSelector((state) => state.spinner);

    useEffect(() => {
        // 為了讓 :active 在 ios 生效
        document.addEventListener('touchstart', () => {
        }, false);
    }, [dispatch]);

    return (
        <>
            <Spinner show={isShow} />
            <ConnectedRouter history={history}>
                <Wrapper>
                    <Container>
                        <Routes />
                    </Container>
                </Wrapper>
            </ConnectedRouter>
        </>
    );
};

sagaMiddleware.run(rootSaga);

export default hot(App);
