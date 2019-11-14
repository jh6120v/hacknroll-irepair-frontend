import React, { useState, useCallback, useEffect } from 'react';
import {
    useObservable,
    pluckFirst,
    useObservableState
} from 'observable-hooks';
import {
    map,
    filter,
    distinctUntilChanged,
    switchMap,
    repeat,
    withLatestFrom,
    scan,
    tap,
    takeWhile
} from 'rxjs/operators';
import { of, animationFrameScheduler } from 'rxjs';
import {
    Button, ModelContent, ModelFooter, ModelShadow, ModelTitle, ModelWrap
} from '../styles/model-style';

const useModel = (title, message = null, confirm = null, confirmText = 'Confirm', cancel = null, cancelText = 'Cancel') => {
    const [isShown, setShown] = useState(false);
    const showModal = useCallback(() => setShown(true), []);
    const hideModal = useCallback(() => setShown(false), []);

    const ModelBox = () => (
        <div>
            <ModelWrap>
                <ModelTitle>{title}</ModelTitle>
                <ModelContent>{message}</ModelContent>
                <ModelFooter>
                    {
                        cancel ? (<Button type="cancel" onClick={cancel}>{cancelText}</Button>) : null
                    }
                    {
                        confirm ? (<Button type="confirm" onClick={confirm}>{confirmText}</Button>) : null
                    }
                </ModelFooter>
            </ModelWrap>
            <ModelShadow />
        </div>
    );

    return {
        ModelBox,
        isShown,
        showModal,
        hideModal
    };
};

const useTimer = (initialTime = 0, direction = 'forward', onSuccess) => {
    const [timerState, setTimerState] = useState('reset');

    const timerState$ = useObservable(pluckFirst, [timerState]);
    const countDown$ = useObservable(() => timerState$.pipe(
        map((state) => state === 'reset'),
        distinctUntilChanged(),
        switchMap((isReset) => (isReset ? of(initialTime)
            // high accuracy timing
            // repetitively calculate the diff
            : of(animationFrameScheduler.now(), animationFrameScheduler)
                .pipe(
                    repeat(),
                    // extract seconds
                    map((startTime) => ~~((Date.now() - startTime) / 1000)),
                    distinctUntilChanged(),
                    withLatestFrom(timerState$),
                    filter(([, state]) => state === 'started'),
                    tap(([val,]) => {
                        // console.log(`tab::${val}`);

                        if (direction === 'backward' && val > initialTime) {
                            onSuccess();
                        }
                    }),
                    takeWhile(([val,]) => direction === 'forward' || (direction === 'backward' && val <= initialTime)),
                    scan((timeLeft, [val,]) => {
                        // count how many second left

                        // 當時間尚未經過1秒時，先不進行時間增減
                        if (val === 0) {
                            return timeLeft;
                        }

                        return direction === 'backward' ? timeLeft - 1 : timeLeft + 1;
                    }, initialTime)
                )))
    ));

    const seconds = useObservableState(countDown$, initialTime);

    return {
        timerState,
        setTimerState,
        seconds
    };
};

export {
    useModel,
    useTimer
};
