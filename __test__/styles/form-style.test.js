import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { Form, FormGroup, InputGroup, InputText, SubmitBtn, ValidateErrorMsg } from '../../src/styles/form-style';

describe('test form-style.', () => {
    it('test <Form /> when render it.', () => {
        const { container } = render(<Form />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('padding', '0 10%');
    });

    it('test <FormGroup /> when render it.', () => {
        const { container } = render(<FormGroup />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('margin-bottom', '20px');
    });

    it('test <InputGroup /> when render it.', () => {
        const { container } = render(<InputGroup />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('display', 'flex');
        expect(tree).toHaveStyleRule('align-items', 'center');
        expect(tree).toHaveStyleRule('flex-wrap', 'wrap');
        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('height', '55px');
        expect(tree).toHaveStyleRule('border-radius', '5px');
        expect(tree).toHaveStyleRule('overflow', 'hidden');
        expect(tree).toHaveStyleRule('margin-bottom', '20px');
        expect(tree).toHaveStyleRule('background-color', '#fff');
    });

    it('test <InputGroup /> when render with isError props.', () => {
        const { container } = render(<InputGroup isError={true} />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('border', '2px solid #ff6f89');
        expect(tree).toHaveStyleRule('box-shadow', '0 0 10px 1px #fff');
    });

    it('test <InputText />', () => {
        const { container } = render(<InputText />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('height', '35px');
        expect(tree).toHaveStyleRule('line-height', '35px');
        expect(tree).toHaveStyleRule('font-size', '18px');
        expect(tree).toHaveStyleRule('letter-spacing', '.3px');
        expect(tree).toHaveStyleRule('color', '#f1828d');
        expect(tree).toHaveStyleRule('text-align', 'center');
        expect(tree).toHaveStyleRule('border-width', '0');
        expect(tree).toHaveStyleRule('-webkit-text-fill-color', '#f1828d');
        expect(tree).toHaveStyleRule('color', '#f1828d', {
            modifier: '&::placeholder'
        });
        expect(tree).toHaveStyleRule('text-align', 'center', {
            modifier: '&::placeholder'
        });
    });

    it('test <ValidateErrorMsg /> when render it.', () => {
        const { container } = render(<ValidateErrorMsg />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('color', '#fff');
        expect(tree).toHaveStyleRule('text-align', 'center');
        expect(tree).toHaveStyleRule('padding-top', '10px');
    });

    it('test <SubmitBtn /> when render it.', () => {
        const { container } = render(<SubmitBtn />);
        const tree = container.firstChild;

        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('height', '55px');
        expect(tree).toHaveStyleRule('font-size', '20px');
        expect(tree).toHaveStyleRule('letter-spacing', '.33px');
        expect(tree).toHaveStyleRule('color', '#fff');
        expect(tree).toHaveStyleRule('line-height', '55px');
        expect(tree).toHaveStyleRule('text-align', 'center');
        expect(tree).toHaveStyleRule('background-color', '#ff6f89');
        expect(tree).toHaveStyleRule('box-shadow', '0 3px 15px 0 #d06a74');
        expect(tree).toHaveStyleRule('border', 'none');
        expect(tree).toHaveStyleRule('padding', '0');
    });
});
