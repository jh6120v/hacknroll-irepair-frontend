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
import { useDispatch, useSelector } from 'react-redux';
import { personalSettingSet } from '../../../modules/personal-setting';

const Register = () => {
    const dispatch = useDispatch();
    const { id, avatar } = useSelector((state) => state.personal);
    const linkTo = useCallback((url) => history.push(url), []);
    const {
        register, handleSubmit, errors
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);

        dispatch(personalSettingSet({
            id,
            author: data.name,
            avatar
        }));

        linkTo('pay');
    };

    return (
        <ContainerInner>
            <Header>
                <Logo />
            </Header>
            <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off" noValidate>
                <FormGroup>
                    <InputGroup isError={!!errors.name}>
                        <InputText
                            name="name"
                            placeholder="name"
                            ref={register({ required: true })}
                        />
                    </InputGroup>
                    <InputGroup isError={!!errors.mobile}>
                        <InputText type="tel" name="mobile" maxLength="10" placeholder="mobile" ref={register({ required: true })} />
                    </InputGroup>
                    <InputGroup isError={!!errors.email}>
                        <InputText type="email" name="email" placeholder="e-mail" ref={register({ required: true })} />
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
