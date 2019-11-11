import React, { useCallback } from 'react';
import useForm from 'react-hook-form';
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
import { history } from '../../../store';

const Register = () => {
    const linkTo = useCallback((url) => history.push(url), []);
    const {
        register, handleSubmit, errors
    } = useForm();

    const onSubmit = () => {
        linkTo('pay');
    };

    return (
        <ContainerInner>
            <Header>
                <Logo />
            </Header>
            <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <FormGroup>
                    <InputGroup>
                        <InputText name="name" placeholder="name" ref={register({ required: true })} />
                        {errors.name && <ValidateErrorMsg>Name is required</ValidateErrorMsg>}
                    </InputGroup>
                    <InputGroup>
                        <InputText name="mobile" placeholder="mobile" ref={register({ required: true })} />
                        {errors.mobile && <ValidateErrorMsg>Mobile is required</ValidateErrorMsg>}
                    </InputGroup>
                    <InputGroup>
                        <InputText name="email" placeholder="e-mail" ref={register({ required: true })} />
                        {errors.email && <ValidateErrorMsg>Email is required</ValidateErrorMsg>}
                    </InputGroup>
                </FormGroup>
                <ButtonGroup>
                    <SubmitBtn type="submit">sign up</SubmitBtn>
                </ButtonGroup>
            </Form>
        </ContainerInner>
    );
};

export default Register;
