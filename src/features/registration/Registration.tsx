import React from 'react';
import s from './Registration.module.scss'
import Form from "react-bootstrap/Form";
import {SubmitHandler, useForm} from "react-hook-form";
import {Button, FormGroup} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {CARDS} from "../../app/App";
import {useDispatch} from "react-redux";
import {useAppDispatch, useAppSelector} from "../../app/store";
import {registration} from "../../app/appSlice";

type InputsType = {
    email: string
    password: string
    confirmPassword: string
};


const Registration = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch<useAppDispatch>()
    const successRegistration = useAppSelector(state => state.app.success)

    const {register, handleSubmit, formState: {errors}} = useForm<InputsType>();
    const onSubmit: SubmitHandler<InputsType> = (data) => {
        const param = {email:data.email, password:data.password}
        dispatch(registration(param))
    }

    debugger
    if (successRegistration) {
        navigate(`/${CARDS.CHECK_EMAIL}`)
    }

    return (
        <div className={s.container}>
            <Form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                <h2 className={s.title}>Sign Up</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={s.emailText}>Email</Form.Label>
                    <Form.Control type="email" className={s.emailInput} placeholder="Enter email"
                                  {...register('email', {
                                      required: {
                                          value: true,
                                          message: 'This is required'
                                      }
                                  })}/>
                    <Form.Text className="text-muted">
                        {errors.email?.message}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className={s.passwordText}>Password</Form.Label>
                    <Form.Control type="password" className={s.passwordInput} placeholder="Password"
                                  {...register('password', {
                                      required: {value: true, message: 'This is required'}, minLength: {
                                          value: 4,
                                          message: 'Min length 4'
                                      }
                                  })}/>
                </Form.Group>
                <FormGroup className="mb-3" controlId='formBasisConfirmPassword'>
                    <Form.Label className={s.passwordText}>Confirm password</Form.Label>
                    <Form.Control type="password" className={s.passwordInput} placeholder="Confirm password"
                                  {...register('confirmPassword', {
                                      required: {value: true, message: 'This is required'}, minLength: {
                                          value: 4,
                                          message: 'Min length 4'
                                      }
                                  })}/>
                </FormGroup>
                <div className={s.buttonContainer}>
                    <Button className={s.button} type={'submit'} size={'sm'} onClick={() => {
                    }}>Sign Up</Button>
                    <p className={s.text}>Already have an account?</p>
                    <Link to={CARDS.LOGIN} className={s.linkSignIn}>Sign in</Link>
                </div>
            </Form>
        </div>
    );
};

export {Registration};