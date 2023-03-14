import React from 'react';
import ComButton from "../../common/components/Button/ComButton";
import logo from '../../common/assets/logo.svg'
import s from './Nav.module.scss'

export const Nav = () => {
    return (
        <div className={s.nav}>
            <img src={logo} alt={''} className={s.logo}/>
            <ComButton name={'Sign in'} callback={() => {
            }} disable={false} typeButton={'button'}/>
        </div>
    );
};
