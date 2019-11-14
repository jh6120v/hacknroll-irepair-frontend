import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ContainerInner, Header, Logo } from '../../../styles/layout-style';
import TopicPanel from '../components/topic-panel';
import ModePanel from '../components/mode-panel';
import TabBar from '../components/tab-bar';

const IRepair = () => {
    const [modeOpen, setModeOpen] = useState(false);
    const { author } = useSelector((state) => state.personal);

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
            {author === 'Guest' ? null : <TabBar />}
        </ContainerInner>
    );
};

export default IRepair;
