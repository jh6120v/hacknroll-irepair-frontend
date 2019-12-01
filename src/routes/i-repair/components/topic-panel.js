import React from 'react';
import {
    Panel, PanelButton, PanelButtonWrap, PanelTitle
} from '../styles';

const TopicPanel = (props) => (
    <Panel>
        <PanelTitle>愛呼呼補給站</PanelTitle>
        <PanelButtonWrap>
            <PanelButton icon="icon-1" onClick={() => props.setModeOpen(true)}>沒有自信</PanelButton>
            <PanelButton bgColor="#f8aa70" icon="icon-2">職場愛呼呼</PanelButton>
            <PanelButton bgColor="#69c9d6" icon="icon-3">缺少異性緣</PanelButton>
        </PanelButtonWrap>
    </Panel>
);

export default TopicPanel;
