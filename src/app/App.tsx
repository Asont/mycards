import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {Link, Navigate, Route, Routes} from 'react-router-dom'
import {Login} from "../features/login/Login";
import {Registration} from "../features/registration/Registration";
import {RecoveryPassword} from "../features/recoveryPassword/RecoveryPassword";
import {NewPassword} from "../features/newPassword/NewPassword";
import {Profile} from "../features/profile/Profile";
import {PageNotFound} from "../features/pageNotFound/PageNotFound";
import {Nav} from "../features/nav/Nav";
import {CheckEmail} from "../features/checkEmail/CheckEmail";
import {SpinnerForApp} from "../common/components/spinner/Spinner";
import {useAppSelector} from "./store";


const enum CARDS {
    LOGIN = 'login',
    PAGE_NOT_FOUND = '404',
    PROFILE = '/',
    RECOVERY_PASSWORD = 'recovery-password',
    REGISTRATION = 'registration',
    INSERT_NEW_PASSWORD = 'new-password',
    CHECK_EMAIL= 'check-email'

}

function App() {

    const loading = useAppSelector(state => state.app.status)


    return (
        <div className="App">
            <Nav/>
            {loading==='loading' && <SpinnerForApp/>}
            <Routes>
                <Route path={CARDS.LOGIN} element={<Login/>}/>
                <Route path={CARDS.REGISTRATION} element={<Registration/>}/>
                <Route path={CARDS.RECOVERY_PASSWORD} element={<RecoveryPassword/>}/>
                <Route path={CARDS.INSERT_NEW_PASSWORD} element={<NewPassword/>}/>
                <Route path={CARDS.PROFILE} element={<Profile/>}/>
                <Route path={CARDS.PAGE_NOT_FOUND} element={<PageNotFound/>}/>
                <Route path={CARDS.CHECK_EMAIL} element={<CheckEmail/>}/>
                <Route path={'*'} element={<Navigate to={CARDS.PAGE_NOT_FOUND}/>}/>
            </Routes>
            <div style={{display:'flex', flexDirection:'column', textDecoration:'none', color:'blue', padding:'10px'}}>
                <Link to={CARDS.LOGIN}>Login </Link>
                <Link to={CARDS.REGISTRATION}>Registration</Link>
                <Link to={CARDS.INSERT_NEW_PASSWORD}>Insert new password</Link>
                <Link to={CARDS.PROFILE}>Profile</Link>
                <Link to={CARDS.PAGE_NOT_FOUND}>Page not found</Link>
                <Link to={CARDS.CHECK_EMAIL}>Check email</Link>
            </div>
        </div>
    );
}

export default App;
