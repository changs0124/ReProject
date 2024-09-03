import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Link, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { AuthStateAtom } from '../../atoms/authAtoms';
import { signinApi } from '../../apis/authApis/postApi';
import { instance } from '../../apis/utils/instance';

function SigninPage(props) {
    const setAuthState = useSetRecoilState(AuthStateAtom);
    const nav = useNavigate();

    const [ fieldErrorMessages, setFieldErrorMessages ] = useState({
        username: <></>,
        password: <></>,
    });


    const [ user, setUser ] = useState({
        username: "",
        password: ""
    })

    const handleInputOnChange = (e) => {
        setUser(user => {
            return {
                ...user,
                [e.target.name]: e.target.value
            }
        })
    };

    const handleSigninOnClick = async () => {
        const signinData = await signinApi(user);
        if(!signinData.isSuccess) {
            if(signinData.errorStatus === 'fieldError') {
                showFieldErrorMessage(signinData.error);
            }
            if(signinData.errorStatus === 'loginError') {
                let EmptyFieldErrors = {
                    username: <></>,
                    password: <></>
                }
                setFieldErrorMessages(EmptyFieldErrors);
                alert(signinData.error);
            }
            return;
        }
        localStorage.setItem("accessToken", "Bearer " + signinData.token);
        
        instance.interceptors.request.use(config => {
            config.headers["Authorization"] = localStorage.getItem("accessToken");
            return config;
        });

        // if(window.history.length > 2) {
        //     nav(-1);
        //     return;
        // }
        nav("/");
    }


    const showFieldErrorMessage = (fieldErrors) => {
        let EmptyFieldErrors = {
            username: <></>,
            password: <></>,
        };
        
        for(let fieldError of fieldErrors) {
            EmptyFieldErrors = {
                ...EmptyFieldErrors,
                [fieldError.field]: <p>{fieldError.defaultMessage}</p>
            }
        }

        setFieldErrorMessages(EmptyFieldErrors);
    }

    const handleSignupOnClick =  () => {
        nav("/signup")
    }

    return (
            <div css={s.layout}>
                <div css={s.container}> 
                    <Link to={"/"}><p>LOGO</p></Link>
                    <div css={s.usernameBox}>
                        <input type="text" name='username' value={user.username} onChange={handleInputOnChange} placeholder='username' autoFocus />
                        {
                            fieldErrorMessages.username
                        }
                    </div>
                    <div css={s.passwordBox}>
                        <input type="password" name='password'  value={user.password} onChange={handleInputOnChange} placeholder='password'  />
                        {
                            fieldErrorMessages.password
                        }
                    </div>

                    <div css={s.buttonBox}>
                        <button onClick={handleSigninOnClick}>signin</button>
                        <button onClick={handleSignupOnClick}>signup</button>
                    </div>
                </div>
            </div>

    );
}

export default SigninPage;