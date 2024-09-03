import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { IoIosClose } from "react-icons/io"
import { useNavigate } from 'react-router-dom';
import { storage } from '../../firebase/firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { v4 as uuid } from 'uuid'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import { updateProfileImgApi } from '../../apis/imgApis/patchApi';
import { useQueryClient } from 'react-query';

function ProfilePage(props) {
    const queryClient = useQueryClient();
    const getUserInfo = queryClient.getQueryData("getUserInfoQuery");

    const nav = useNavigate();

    const [ loadPercent, setLoadPercent ] = useState(0);

    const handleCancelOnClick = () => {
        if(window.history.length > 2) {
            nav(-1);
            return;
        }
        nav("/");
    }

    const handleImageChangeOnClick = () => {
        if(window.confirm("프로필 사진을 변경하시겠습니까?")) {
            const fileInput = document.createElement("input");
            fileInput.setAttribute("type", "file");
            fileInput.setAttribute("accept", "image/*");
            fileInput.click();

            fileInput.onchange = (e) => {
                const profileImage = Array.from(e.target.files)[0];
                setLoadPercent(0);

                const storageRef = ref(storage, `user/profile/${uuid()}_${profileImage.name}`);
                const uploadTask = uploadBytesResumable(storageRef, profileImage);
                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        setLoadPercent(
                            Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100
                        );
                    },
                    (error) => {
                        console.error(error);
                    },
                    async (success) => {
                        const url = await getDownloadURL(storageRef);
                        // const response = await updateProfileImgApi(url);
                        // queryClient.invalidateQueries(["getUserInfoQuery"]);
                    }
                );
                
            }

        }
    }

    return (
        <div css={s.layout}>
            <div css={s.cancelBox}><IoIosClose onClick={handleCancelOnClick} /></div>
            <div css={s.container}>
                <div css={s.userBox}>
                    <div css={s.userimg} onClick={handleImageChangeOnClick}>
                        <img src={getUserInfo?.data.img} alt="" />
                    </div>
                    <div css={s.userInfo}>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div css={s.userDetailsBox}>
                    <div css={s.userDetailsInfo}>
                        <input type="text" name='username'/>
                        <input type="text" />
                        <div>
                            <button>회원정보 수정</button>
                            <button>비밀번호 변경</button>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
        
    );
}

export default ProfilePage;