import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { Nav, PrevLink, Title } from '../../src/styles/nav-style';

describe('test nav-style style', () => {
    it('test <Nav /> when render it.', () => {
        const { container } = render(<Nav />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('height', 'calc(44px + env(safe-area-inset-top))');
        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('justify-content', 'space-between');
        expect(tree).toHaveStyleRule('align-items', 'center');
        expect(tree).toHaveStyleRule('color', '#fff');
        expect(tree).toHaveStyleRule('padding', 'env(safe-area-inset-top) 10px 0 10px');
        expect(tree).toHaveStyleRule('overflow', 'hidden');
    });

    it('test <Title /> when render it.', () => {
        const { container } = render(<Title />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('font-size', '17px');
        expect(tree).toHaveStyleRule('font-weight', 'bold');
        expect(tree).toHaveStyleRule('line-height', '22px');
    });

    it('test <PrevLink /> when render it.', () => {
        const { container } = render(<PrevLink />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('min-width', '28px');
        expect(tree).toHaveStyleRule('height', '28px');
    });
});
