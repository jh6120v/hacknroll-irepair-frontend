import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import {
    Container, Header, Logo, Wrapper
} from '../../src/styles/layout-style';

describe('test layout-style.', () => {
    it('test <Header /> snapshot.', () => {
        const { container } = render(<Header />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <Header /> when render it.', () => {
        const { container } = render(<Header />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('justify-content', 'center');
        expect(tree).toHaveStyleRule('height', '34vh');
        expect(tree).toHaveStyleRule('padding', '11vh 0 5vh 0');
    });

    it('test <Logo /> when render it.', () => {
        const { container } = render(<Logo />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('background-image', 'url(i-repair-logo.svg)');
        expect(tree).toHaveStyleRule('background-position', 'center center');
        expect(tree).toHaveStyleRule('background-size', 'contain');
        expect(tree).toHaveStyleRule('background-repeat', 'no-repeat');
    });

    it('test <Wrapper /> snapshot.', () => {
        const { container } = render(<Wrapper />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <Wrapper /> when render it.', () => {
        const { container } = render(<Wrapper />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('max-width', '400px');
        expect(tree).toHaveStyleRule('min-height', '100%');
        expect(tree).toHaveStyleRule('flex-wrap', 'wrap');
        expect(tree).toHaveStyleRule('flex-direction', 'column');
        expect(tree).toHaveStyleRule('margin', '0');
        expect(tree).toHaveStyleRule('margin', '0 auto', {
            media: '(min-width:480px)'
        });
    });

    it('test <Container /> snapshot.', () => {
        const { container } = render(<Container />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('test <Container /> when render it.', () => {
        const { container } = render(<Container />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('height', '100%');
        expect(tree).toHaveStyleRule('flex-grow', '1');
        expect(tree).toHaveStyleRule('flex-shrink', '1');
        expect(tree).toHaveStyleRule('flex-basis', 'auto');
    });
});
