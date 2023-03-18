import React from 'react';
import {useAppDispatch, useAppSelector} from "../../app/store";
import {useDispatch} from "react-redux";
import {Navigate, useNavigate} from "react-router-dom";

const Profile = () => {

    const login = useAppSelector(state=>state.auth.login)
    const dispatch = useDispatch<useAppDispatch>()
    const navigate =useNavigate()

    if(!login){
        return <Navigate to={'login'}/>
    }


    return (
        <div>
            Profile
        </div>
    );
};

export {Profile};