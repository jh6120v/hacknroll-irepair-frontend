import React, { useCallback } from 'react';
import useForm from 'react-hook-form';
import { history } from '../../../store';
import { ContainerInner, Header, Logo } from '../../../styles/layout-style';
import {
    ButtonGroup,
    Form,
    FormGroup,
    InputGroup,
    InputText,
    SubmitBtn,
    ValidateErrorMsg
} from '../../../styles/form-style';
import { useModel } from '../../../commons/hooks';
import Model from '../../../components/model';

const Pay = () => {
    const linkTo = useCallback((url) => history.push(url), []);
    const {
        ModelBox, isShown, showModal, hideModal
    } = useModel('恭喜你付款成功', null, useCallback(() => {
        linkTo('/');
        hideModal();
    }, []), '前進呼呼');

    const {
        register, handleSubmit, errors
    } = useForm();

    const onSubmit = () => {
        showModal();
    };

    return (
        <ContainerInner>
            <Header>
                <Logo />
            </Header>
            <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off" novalidate>
                <FormGroup>
                    <InputGroup>
                        <InputText type="tel" name="card" maxLength="16" placeholder="credit card number" ref={register({ required: true })} />
                        {errors.card && <ValidateErrorMsg>Card is required</ValidateErrorMsg>}
                    </InputGroup>
                    <InputGroup>
                        <InputText type="tel" name="expire" maxLength="4" placeholder="expiration date(MMYY) " ref={register({ required: true })} />
                        {errors.expire && <ValidateErrorMsg>Expiration date is required</ValidateErrorMsg>}
                    </InputGroup>
                    <InputGroup>
                        <InputText type="tel" name="code" maxLength="3" placeholder="security code" ref={register({ required: true })} />
                        {errors.code && <ValidateErrorMsg>Security code is required</ValidateErrorMsg>}
                    </InputGroup>
                </FormGroup>
                <ButtonGroup>
                    <SubmitBtn type="submit">pay now</SubmitBtn>
                </ButtonGroup>
            </Form>
            <Model isShow={isShown}>
                <ModelBox />
            </Model>
        </ContainerInner>
    );
};

export default Pay;
