import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {Route, Routes, Navigate} from 'react-router-dom'
import {Login} from "../features/login/Login";
import {Registration} from "../features/registration/Registration";
import {RecoveryPassword} from "../features/recoveryPassword/RecoveryPassword";
import {NewPassword} from "../features/newPassword/NewPassword";
import {Profile} from "../features/profile/Profile";
import {PageNotFound} from "../features/pageNotFound/PageNotFound";
import {Nav} from "../features/nav/Nav";


const enum CARDS {
    LOGIN = 'login',
    PAGE_NOT_FOUND = '404',
    PROFILE = '/',
    RECOVERY_PASSWORD = 'recovery-password',
    REGISTRATION = 'registration',
    INSERT_NEW_PASSWORD = 'new-password',

}

function App() {
    return (
        <div className="App">
            <Nav/>
            <Routes>
                <Route path={CARDS.LOGIN} element={<Login/>}/>
                <Route path={CARDS.REGISTRATION} element={<Registration/>}/>
                <Route path={CARDS.RECOVERY_PASSWORD} element={<RecoveryPassword/>}/>
                <Route path={CARDS.INSERT_NEW_PASSWORD} element={<NewPassword/>}/>
                <Route path={CARDS.PROFILE} element={<Profile/>}/>
                <Route path={CARDS.PAGE_NOT_FOUND} element={<PageNotFound/>}/>
                <Route path={'*'} element={<Navigate to={CARDS.PAGE_NOT_FOUND}/>}/>
            </Routes>
        </div>
    );
}

export default App;
