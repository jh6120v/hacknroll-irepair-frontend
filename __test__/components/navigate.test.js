import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Router } from 'react-router';
import Navigate from '../../src/components/navigate';
import { FUNC_CLOSE, FUNC_GO_BACK } from '../../src/constants';
import { history } from '../../src/store';

describe('test header component.', () => {
    it('test <Navigate /> snapshot.', () => {
        cleanup();

        const { container } = render(<Navigate />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <Navigate /> when set title.', () => {
        cleanup();

        const { getByTestId } = render(<Navigate title="test_title" />);

        expect(getByTestId('display_title').innerHTML).toEqual('test_title');
    });

    it('test <Navigate /> when go back btn exist.', () => {
        cleanup();

        const { getByTestId } = render(<Navigate prev={FUNC_GO_BACK} />);

        expect(getByTestId('display_prev_link').querySelector('a').innerHTML).toEqual('<svg class="sc-bdVaJa fUuvxv" fill="#fff" width="28px" height="28px" viewBox="0 0 1024 1024" rotate="0"><path d="M704 256.8l-64.6-64.8-319.4 320 319.4 320 64.6-64.8-254.6-255.2z"></path></svg>');
    });

    it('test <Navigate /> when go back click once', () => {
        cleanup();

        history.goBack = jest.fn();

        const { getByTestId } = render(<Navigate prev={FUNC_GO_BACK} />);

        fireEvent.click(getByTestId('display_prev_link').querySelector('a'));

        expect(history.goBack).toHaveBeenCalledTimes(1);
    });

    it('test <Navigate /> when setting btn exist.', () => {
        cleanup();

        const { getByTestId } = render(<Router history={history}><Navigate next="FUNC_SETTING" /></Router>);

        expect(getByTestId('display_next_link').innerHTML).toEqual('');
    });
});
