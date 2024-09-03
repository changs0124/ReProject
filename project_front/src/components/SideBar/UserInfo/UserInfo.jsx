/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

function UserInfo({closeModal}) {
    const nav = useNavigate();

    const queryClient = useQueryClient();
    const getUserInfo = queryClient.getQueryData("getUserInfoQuery");
    const accessTokenState = queryClient.getQueryState("accessTokenValidQuery");

    const handleSigninOnClick = () => {
        nav("/signin");
        closeModal();
    }

    const handleSignupOnClick = () => {
        nav("/signup")
        closeModal();
    }

    const handleProfileOnClick = () => {
        nav('/profile');
        closeModal();
    }

    const handleLogoutOnClick = () => {
        localStorage.removeItem("accessToken");
        window.location.replace("/");
    }

    return (
        <div css={s.layout}>
            <p>{getUserInfo?.data.name}</p>
            <div css={s.userimage}>
                <img src={getUserInfo?.data.img} alt="" />
            </div>
            <div css={s.buttonBox}>
                {
                    accessTokenState?.status !== "success"
                    ?
                    <>
                        <button onClick={handleSigninOnClick}>signin</button>
                        <button onClick={handleSignupOnClick}>signup</button>
                    </>
                    :
                    <>
                        <button onClick={handleProfileOnClick}>Profile</button>
                        <button onClickCapture={handleLogoutOnClick}>Logout</button>
                    </>
                    
                }
                
            </div>

        </div>
    );
}

export default UserInfo;