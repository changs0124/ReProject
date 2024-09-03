import { instance } from "../utils/instance";

export const getAccessTokenStatusApi = async () => {

    return await instance.get("/auth/access", {
        params: {
            accessToken: localStorage.getItem("accessToken")
        }
    });
}

export const getUserInfoApi = async () => {
    let response
    try {
        response = await instance.get("/auth/user", {
            params: {
                accessToken: localStorage.getItem("accessToken")
            }
        });
    } catch(e) {
        console.error(e);
        response = e.response;
    }
    
    return response;
}