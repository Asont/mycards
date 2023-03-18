import React from 'react';
import logo from '../../common/assets/img/logo.svg'
import s from './Nav.module.scss'
import {Button} from "react-bootstrap";
import {logout} from "../../app/authSlice";
import {useDispatch} from "react-redux";
import {useAppDispatch} from "../../app/store";

type NavType ={
    login:boolean
}

export const Nav:React.FC<NavType> = ({login}) => {

    const dispatch = useDispatch<useAppDispatch>()

    const onClickHandler = ()=>{
        if(login){
            dispatch(logout())
        }
    }

    return (
        <div className={s.nav}>
            <img src={logo} alt={''} className={s.logo}/>
            <Button type={'submit'} size={'sm'} className={s.button} onClick={onClickHandler}>{login?'Log out':'Sign in'}</Button>
        </div>
    );
};
