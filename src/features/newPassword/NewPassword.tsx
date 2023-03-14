import React from 'react';
import s from './NewPassword.module.scss'
import {Button, Form, FormControl, FormGroup} from "react-bootstrap";
import {SubmitHandler, useForm} from "react-hook-form";

type InputType = {
    password: string
}

const NewPassword = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<InputType>()

    const onSubmit: SubmitHandler<InputType> = (data) => alert(data)

    return (
        <div className={s.container}>
            <div className={s.form}>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className={s.title}>Create new paswword</h2>

                    <FormGroup className="mb-3" controlId="formNewPassword">
                        <FormControl type={'password'} placeholder={'Password'} {...register('password', {
                            required: {
                                value: true,
                                message: 'This is required'
                            }, minLength: {
                                value: 4,
                                message: 'Minimum 4'
                            }
                        })}>
                        </FormControl>
                        <Form.Text className="text-muted">
                            {errors.password?.message}
                        </Form.Text>
                    </FormGroup>
                </Form>
                <div>
                    <p className={s.text}>Create new password and we will send you further instructions to email</p>
                </div>
                <Button type={'button'} size={'sm'} className={s.button} onClick={() => {
                }}>Create new Password</Button>
            </div>
        </div>
    );
};

export {NewPassword};