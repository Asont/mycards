import Form from 'react-bootstrap/Form';
import s from './Login.module.scss'
import ComButton from "../../common/components/Button/ComButton";
import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../app/store";
import {Navigate, useNavigate} from 'react-router-dom'
import {loginIn} from "../../app/authSlice";
import {useDispatch} from "react-redux";

type Inputs = {
    email: string
    password: string
    rememberMe: boolean
};

function Login() {

    const login = useAppSelector(state=>state.auth.login)
    const dispatch = useDispatch<useAppDispatch>()
    const navigate = useNavigate()
    const error = useAppSelector(state=>state.app.error)
    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => dispatch(loginIn(data));


    if(login){
       return <Navigate to={'/'}/>
    }

    return (
        <div className={s.container}>

            <Form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                <h2 className={s.title}>Sign in</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" defaultValue={'bet1@gmail.com'} placeholder="Enter email"
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
                    <Form.Control type="password" placeholder="Password" defaultValue={"1qxcvBG3"}
                                  {...register('password', {
                                      required: {value: true, message: 'This is required'}, minLength: {
                                          value: 4,
                                          message: 'Min length 4'
                                      }
                                  })}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" {...register('rememberMe')}/>
                </Form.Group>
                <div className={s.buttonContainer}>
                    <ComButton name={'Sign in'} callback={() => {
                    }} typeButton={"submit"} disable={false}/>
                </div>
            </Form>
        </div>
    );
}

export {Login};