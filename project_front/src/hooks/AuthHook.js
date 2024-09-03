import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { instance } from '../apis/utils/instance';
import { todoCountsApi, todoTodayApi } from '../apis/todoApis/getApi';
import { getUserInfoApi } from '../apis/authApis/getApi';

function AuthHook() {
    const nav = useNavigate();
    const location = useLocation();

    const [ ref, setRef ] = useState(true);

    useEffect(() => {
        if(!ref) {
            setRef(true);
        }
    }, [location.pathname]);

    const accessTokenValid = useQuery(
        ["accessTokenValidQuery"],
        async () => {
            setRef(false);
            return await instance.get("/auth/access", {
                params: {
                    accessToken: localStorage.getItem("accessToken")
                }
            });
        },
        {
            enabled: ref,
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: response => {
                const permitPaths = ["/signin", "/signup"];
                for(let permitPath of permitPaths) {
                    if(location.pathname.startsWith(permitPath)) {
                        alert("로그아웃 후 이용해주세요");
                        nav("/");
                        break;
                    }
                }
            },
            onError: error => {
                const authPaths = ["/todo"];
                for(let authPath of authPaths) {
                    if(location.pathname.startsWith(authPath)) {
                        alert("로그인 후 이용해주세요");
                        nav("/signin");
                        break;
                    }
                }
            }
        }
    );

    
    const getUserInfo = useQuery(
        ["getUserInfoQuery"],
            getUserInfoApi,
        {
            enabled: accessTokenValid.isSuccess && accessTokenValid.data?.data,
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: response => {
                console.log(response)
            }
        }
    );

    const getTodoCounts = useQuery(
        ["getTodoCountsQuery"],
            todoCountsApi,
        {
            enabled: accessTokenValid.isSuccess && accessTokenValid.data?.data,
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: response => {
                console.log(response);
            }
        }
    );

    const getTotoToday = useQuery(
        ["getTotoTodayQuery"],
            todoTodayApi, 
        {
            enabled: accessTokenValid.isSuccess && accessTokenValid.data?.data,
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: response => {
                console.log(response);
            }
        }
    )

    
}

export default AuthHook;