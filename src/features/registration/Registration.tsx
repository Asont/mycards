import React from 'react';
import s from './Registration.module.scss'
import Form from "react-bootstrap/Form";
import {SubmitHandler, useForm} from "react-hook-form";
import ComButton from "../../common/components/Button/ComButton";
import {FormGroup} from "react-bootstrap";
import {Link} from "react-router-dom";

type Inputs = {
    email: string
    password: string
    confirmPassword: string
};


const Registration = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => alert(data.email);

    return (
        <div className={s.container}>

            <Form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                <h2 className={s.title}>Sign Up</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
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
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                                  {...register('password', {
                                      required: {value: true, message: 'This is required'}, minLength: {
                                          value: 4,
                                          message: 'Min length 4'
                                      }
                                  })}/>
                </Form.Group>
             <FormGroup className="mb-3" controlId='formBasisConfirmPassword'>
                 <Form.Label>Confirm password</Form.Label>
                 <Form.Control type="password" placeholder="Confirm password"
                               {...register('confirmPassword', {
                                   required: {value: true, message: 'This is required'}, minLength: {
                                       value: 4,
                                       message: 'Min length 4'
                                   }
                               })}/>
             </FormGroup>
                <div className={s.buttonContainer}>
                    <ComButton name={'Sign Up'} callback={() => {
                    }} typeButton={"submit"} disable={false}/>
                </div>
                <div className={s.downText}>
                    <p>Already have an account?</p>
                </div>
                <div className={s.link}>
                <Link to={'login'}>Sign in</Link>
                </div>
            </Form>
        </div>
    );
};

export {Registration};