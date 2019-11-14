import React, { Suspense } from 'react';
import moment from 'moment';
import { LazyLoad } from '../styles/common-style';

export const createActionCreator = (namespace) => (actionType) => {
    const type = `${namespace}/${actionType}`;
    const actionCreator = (payload = {}) => ({
        type,
        payload
    });

    actionCreator.type = type;
    Object.freeze(actionCreator);

    return actionCreator;
};

export const waitingRouteComponent = (Component) => () => (
    <Suspense fallback={<LazyLoad>Loading...</LazyLoad>}>
        <Component />
    </Suspense>
);

export const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomID = () => {
    return `A${+moment()}`;
};

export const getRandomAvatar = () => {
    const avatarList = [
        'avatar-1.png',
        'avatar-2.png',
        'avatar-3.png',
        'avatar-4.png',
        'avatar-5.png',
        'avatar-6.png'
    ];

    const key = getRandom(0, 5);

    return avatarList[key];
};
