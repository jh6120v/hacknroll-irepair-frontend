import React from 'react';
import PropTypes from 'prop-types';
import IosArrowBack from 'react-ionicons/lib/IosArrowBack';
import {
    Nav, NextLink, PrevLink, Title
} from '../styles/nav-style';
import { FUNC_GO_BACK } from '../constants';
import { history } from '../store';

const Navigate = ({ title, prev, next }) => {
    const renderPrev = (prevState) => {
        if (prevState === FUNC_GO_BACK) {
            return (
                <a onClick={() => history.goBack()}>
                    <IosArrowBack fontSize="28px" color="#fff" />
                </a>
            );
        }

        return null;
    };

    const renderNext = (nextState) => null;

    return (
        <Nav>
            <PrevLink data-testid="display_prev_link">{renderPrev(prev)}</PrevLink>
            <Title data-testid="display_title">{title}</Title>
            <NextLink data-testid="display_next_link">{renderNext(next)}</NextLink>
        </Nav>
    );
};

Navigate.propsTypes = {
    title: PropTypes.string,
    prev: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    next: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])
};

export default Navigate;
