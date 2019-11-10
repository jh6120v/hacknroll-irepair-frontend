import React from 'react';
import PropTypes from 'prop-types';
import { Animated } from "react-animated-css";
import { Panel, PanelButton, PanelButtonWrap, PanelTitle } from "../styles";

const ModePanel = (props) => {
    return (
        <Animated animationIn="slideInUp" animationOut="fadeOut" isVisible={props.isVisible}>
            <Panel>
                <PanelTitle>選擇開啟模式</PanelTitle>
                <PanelButtonWrap>
                    <PanelButton>iRepair</PanelButton>
                    <PanelButton bgColor='#42c507'>開啟LINE體驗</PanelButton>
                    <PanelButton bgColor='#4267b2'>開啟Facebook體驗</PanelButton>
                </PanelButtonWrap>
            </Panel>
        </Animated>
    );
};

ModePanel.propsTypes = {
    isVisible: PropTypes.boolean
};

export default ModePanel;