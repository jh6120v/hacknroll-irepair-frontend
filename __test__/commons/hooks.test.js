import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { render } from '@testing-library/react';
import { useModel, useTimer } from '../../src/commons/hooks';

describe('test custom hooks', () => {
    test('test useModel hooks', () => {
        const { result } = renderHook(() => useModel(
            'test',
            'message',
            () => {
                console.log('confirm test');
            },
            'confirm',
            () => {
                console.log('cancel test');
            },
            'cancel'
        ));

        const { container, getByText } = render(<result.current.ModelBox />);

        expect(container.firstChild).toMatchSnapshot();

        expect(getByText('confirm')).toBeTruthy();
        expect(getByText('cancel')).toBeTruthy();

        act(() => {
            result.current.showModal();
        });

        expect(result.current.isShown).toBe(true);

        act(() => {
            result.current.hideModal();
        });

        expect(result.current.isShown).toBe(false);
    });

    it('test useTimer hooks', () => {
        const { result } = renderHook(() => useTimer(3, 'backward'));

        expect(result.current.timerState).toEqual('reset');

        act(() => {
            result.current.setTimerState('start');
        });

        expect(result.current.timerState).toEqual('start');
    });
});
