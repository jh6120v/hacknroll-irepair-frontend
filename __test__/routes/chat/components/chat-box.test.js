import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import ChatBox from '../../../../src/routes/chat/components/chat-box';

describe('test chat-box component.', () => {
    it('test <ChatBox /> snapshot.', () => {
        cleanup();
        const { container } = render(<ChatBox />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <ChatBox /> snapshot render with isSelf equal to true', () => {
        cleanup();
        const { container } = render(<ChatBox isSelf />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <ChatBox /> snapshot render with images props.', () => {
        cleanup();
        const { container } = render(<ChatBox images="images" />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <ChatBox /> when render different props.', () => {
        cleanup();

        const { getByTestId } = render(<ChatBox author="AUTHOR" message="MESSAGE" time="TIME" />);

        expect(getByTestId('author').innerHTML).toEqual('AUTHOR');
        expect(getByTestId('message').innerHTML).toEqual('MESSAGE');
        expect(getByTestId('time').innerHTML).toEqual('TIME');
    });
});
