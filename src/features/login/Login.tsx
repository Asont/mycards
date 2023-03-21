import Form from 'react-bootstrap/Form';
import s from './Login.module.scss'
import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../app/store";
import {Link, Navigate} from 'react-router-dom'
import {loginIn} from "../../app/authSlice";
import {useDispatch} from "react-redux";
import {CARDS} from "../../app/App";
import {Button} from "react-bootstrap";
import React from "react";

type Inputs = {
    email: string
    password: string
    rememberMe: boolean
};

function Login() {

    const login = useAppSelector(state => state.auth.login)
    const dispatch = useDispatch<useAppDispatch>()
    const error = useAppSelector(state => state.app.error)
    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => dispatch(loginIn(data));


    if (login) {
        return <Navigate to={'/'}/>
    }

    return (
        <div className={s.container}>
            <Form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                <h2 className={s.title}>Sign in</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={s.emailText}>Email</Form.Label>
                    <Form.Control type="email" className={s.emailInput} defaultValue={'bet1@gmail.com'}
                                  placeholder="Enter email"
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
                                  defaultValue={"1qxcvBG3"}
                                  {...register('password', {
                                      required: {value: true, message: 'This is required'}, minLength: {
                                          value: 4,
                                          message: 'Min length 4'
                                      }
                                  })}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" {...register('rememberMe')} className={s.checkBox}/>
                    <div className={s.linkContainer}>
                        <Link to={CARDS.RECOVERY_PASSWORD} className={s.link}>Forgot Password?</Link>
                    </div>
                    <div className={s.buttonContainer}>
                        <Button variant={'primary'} className={s.button} onClick={() => {
                        }} size={'sm'} type={"button"} disabled={false}>Sign in</Button>
                        <p className={s.text}>Already have an account?</p>
                        <Link to={CARDS.REGISTRATION} className={s.linkSignUp}>Sign Up</Link>
                    </div>
                </Form.Group>
            </Form>
        </div>
    );
}

export {Login};