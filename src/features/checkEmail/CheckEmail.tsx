import React from 'react';
import s from './CheckEmail.module.scss'
import checkEmailImg from '../../common/assets/img/checkEmail.png'
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import {CARDS} from "../../app/App";

const CheckEmail = () => {
    return (
        <div className={s.container}>
            <div className={s.form}>
                <h2 className={s.title}>Check Email</h2>
                <div>
                    <img src={checkEmailImg} alt={'img'} className={s.img}/>
                </div>
                <div>
                    <p className={s.text}>We’ve sent an Email with instructions to example@mail.com</p>
                </div>
                <div className="d-grid gap-1">
                    <Button variant={'primary'} className={s.button} onClick={()=>{}} size={'sm'} type={"button"} disabled={false}><Link to={`/${CARDS.LOGIN}`} style={{color:'white'}}>Back to login</Link></Button>
                </div>
            </div>
        </div>
    );
};

export {CheckEmail};