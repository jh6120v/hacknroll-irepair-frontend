import React from 'react';
import {
    TabBarIcon, TabBarItem, TabBarText, TabBarWrap
} from '../styles';
import iconLogo from '../../../assets/images/logo.svg';
import iconRipair from '../../../assets/images/ripair.svg';
import iconSetting from '../../../assets/images/setting.svg';

const TabBar = () => (
    <TabBarWrap>
        <TabBarItem>
            <TabBarIcon icon={iconLogo} />
            <TabBarText isSelected>irepair</TabBarText>
        </TabBarItem>
        <TabBarItem>
            <TabBarIcon icon={iconRipair} />
            <TabBarText>1v1 心靈雞湯</TabBarText>
        </TabBarItem>
        <TabBarItem>
            <TabBarIcon icon={iconSetting} />
            <TabBarText>設定</TabBarText>
        </TabBarItem>
    </TabBarWrap>
);

export default TabBar;