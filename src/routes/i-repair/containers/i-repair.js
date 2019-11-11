import React, { useState } from 'react';
import { ContainerInner, Header, Logo } from '../../../styles/layout-style';
import TopicPanel from '../components/topic-panel';
import ModePanel from '../components/mode-panel';

const IRepair = () => {
    const [modeOpen, setModeOpen] = useState(false);

    return (
        <ContainerInner>
            <Header>
                <Logo />
            </Header>
            <TopicPanel absolute setModeOpen={setModeOpen} />
            {
                modeOpen ? (
                    <ModePanel isVisible={modeOpen} />
                ) : null
            }
        </ContainerInner>
    );
};

export default IRepair;
