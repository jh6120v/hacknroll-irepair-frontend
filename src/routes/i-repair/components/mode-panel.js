import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-animated-css';
import {
    Panel, PanelButton, PanelButtonWrap, PanelTitle
} from '../styles';
import { history } from '../../../store';

const ModePanel = ({ isVisible }) => {
    const linkTo = useCallback((url) => history.push(url), []);

    return (
        <Animated
            animationIn="slideInUp"
            animationOut="slideOutDown"
            isVisible={isVisible}
            animationInDuration={800}
            style={{
                position: 'absolute', left: 0, bottom: 0, width: '100%', zIndex: 2
            }}
        >
            <Panel>
                <PanelTitle>選擇開啟模式</PanelTitle>
                <PanelButtonWrap>
                    <PanelButton onClick={() => linkTo('chat')}>iRepair</PanelButton>
                    <PanelButton bgColor="#42c507">開啟LINE體驗</PanelButton>
                    <PanelButton bgColor="#4267b2">開啟Facebook體驗</PanelButton>
                </PanelButtonWrap>
            </Panel>
        </Animated>
    );
};

ModePanel.propsTypes = {
    isVisible: PropTypes.boolean
};

export default ModePanel;
