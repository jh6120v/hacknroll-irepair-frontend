import { lazy } from 'react';
import { render, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {
    createActionCreator,
    waitingRouteComponent,
    getRandom,
    getRandomAvatar,
    getWebSocketUrl
} from '../../src/commons/utils';
import { WEBSOCKET_URL } from '../../src/constants';

describe('test utils', () => {
    it('test createActionCreator type', () => {
        const actionCreator = createActionCreator('@@NAMESPACE');
        const test = actionCreator('TEST');

        expect(test.type).toEqual('@@NAMESPACE/TEST');
    });

    it('test createActionCreator func', () => {
        const actionCreator = createActionCreator('@@NAMESPACE');
        const test = actionCreator('TEST');

        const fakeTestCreator = () => ({
            type: '@@NAMESPACE/TEST',
            payload: {}
        });

        expect(JSON.stringify(test())).toEqual(JSON.stringify(fakeTestCreator()));
    });

    it('rendered lazily fallback', async () => {
        const LazyComponent = lazy(() => import('../lazy-component'));

        const { container } = render(
            waitingRouteComponent(LazyComponent)()
        );

        const lazyElement = await waitForElement(() => container);

        expect(lazyElement).toMatchSnapshot();
    });

    it('rendered lazily', async () => {
        const LazyComponent = lazy(() => import('../lazy-component'));

        const { getByText } = render(
            waitingRouteComponent(LazyComponent)()
        );

        const lazyElement = await waitForElement(() => getByText(/i am lazy/i));
        expect(lazyElement).toBeInTheDocument();
    });

    it('test getRandom.', () => {
        const random = getRandom(1, 3);

        expect(random).toBeGreaterThan(0);
        expect(random).toBeLessThan(4);
    });

    it('test getRandomAvatar.', () => {
        const list = [
            'avatar-1.png',
            'avatar-2.png',
            'avatar-3.png',
            'avatar-4.png',
            'avatar-5.png',
            'avatar-6.png'
        ];

        const avatar = getRandomAvatar();

        expect(list.includes(avatar)).toEqual(true);
    });

    it('test getWebSocketUrl.', () => {
        const url = getWebSocketUrl();

        expect(url).toEqual(`${WEBSOCKET_URL}`);
    });
});
