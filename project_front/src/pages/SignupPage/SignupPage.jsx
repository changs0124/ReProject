import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate } from 'react-router-dom';
import { signupApi } from '../../apis/authApis/postApi';

function SignupPage(props) {
    const nav = useNavigate();

    const [ fieldErrorMessages, setFieldErrorMessages ] = useState({
        username: <></>,
        password: <></>,
        checkPassword: <></>,
        name: <></>,
        email: <></>
    });

    const [ user, setUser ] = useState({
        username: "",
        password: "",
        checkPassword: "",
        name: "",
        email: ""
    })

    const handleInputOnChange = (e) => {
        setUser(user => {
            return {
                ...user,
                [e.target.name]: e.target.value
            }
        })
    };

    const handleSignupOnClick = async () => {
        const signupDto = await signupApi(user);
        if(!signupDto.isSuccess) {
            showFieldErrorMessage(signupDto.fieldErrors);
            return;
        }
        alert(`${signupDto.success.message}`);
        nav("/signin");
    }


    const showFieldErrorMessage = (fieldErrors) => {
        let EmptyFieldErros = {
            username: <></>,
            password: <></>,
            checkPassword: <></>,
            name: <></>,
            email: <></>
        };
        
        for(let fieldError of fieldErrors) {
            EmptyFieldErros = {
                ...EmptyFieldErros,
                [fieldError.field]: <p>{fieldError.defaultMessage}</p>
            }
        }

        setFieldErrorMessages(EmptyFieldErros);
    }

    

    const handleCancelOnClick = () => {
        nav("/signin");
    }

    return (
            <div css={s.layout}>
                <div css={s.container}> 
                    <p>Sign Up</p>
                    <div css={s.usernameBox}>
                        <input type="text" name='username' value={user.username} onChange={handleInputOnChange} placeholder='username' autoFocus />
                        {
                            fieldErrorMessages.username
                        }
                    </div>
                    <div css={s.passwordBox}>
                        <input type="password" name='password'  value={user.password} onChange={handleInputOnChange} placeholder='password' />
                        {
                            fieldErrorMessages.password
                        }
                        <input type="password" name='checkPassword' value={user.checkPassword} onChange={handleInputOnChange} placeholder='checkPassword' />
                        {
                            fieldErrorMessages.checkPassword
                        }
                    </div>
                    <div css={s.nameBox}>
                        <input type="text" name='name' value={user.name} onChange={handleInputOnChange} placeholder='name'/>
                        {
                            fieldErrorMessages.name
                        }
                    </div>
                    <div css={s.buttonBox}>
                        <button onClick={handleSignupOnClick}>signup</button>
                        <button onClick={handleCancelOnClick}>cancel</button>
                    </div>
                </div>
            </div>
    );
}

export default SignupPage;