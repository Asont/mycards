import React from 'react';
import Button from 'react-bootstrap/Button';
import s from './ComButton.module.scss'

type CommonButtonType = {
    name:string
    callback:()=>void
    typeButton?:"button" | "submit" | "reset" | undefined
    disable:boolean
}

const ComButton:React.FC<CommonButtonType> = ({name, callback,typeButton,disable}) => {
    return (
        <Button variant={'primary'} className={s.button} onClick={callback} size={'sm'} type={typeButton?typeButton:"button"} disabled={disable}>{name}</Button>
    );
};

export default ComButton;