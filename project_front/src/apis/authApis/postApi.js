import { instance } from "../utils/instance";

export const signupApi = async (data) => {
    let signupData = {
        isSuccess: false,
        success: {
            message: "",
            user: null
        },
        fieldErrors: [
            {   
                field: "",
                defaultMessage: ""
            }
        ] 
    }

    try {
        const response = await instance.post("/auth/signup" ,data);
        signupData = {
            isSuccess: true,
            success: response.data
        }
    } catch(e) {
        const response = e.response;
        signupData = {
            isSuccess: false,
            fieldErrors: response.data.map(fieldError => ({field: fieldError.field, defaultMessage: fieldError.defaultMessage}))
        }
    }
    
    return signupData;
}

export const signinApi = async (data) => {
    let signinData = {
        isSuccess: false,
        token: null,
    }

    try {
        const response = await instance.post("/auth/signin", data);
        signinData = {
            isSuccess: true,
            token: response.data.accessToken
        }
    } catch(e) {
        const response = e.response;
        signinData = {
            isSuccess: false,
        }
        if(typeof(response.data) === 'string') {
            signinData['errorStatus'] = "loginError";
            signinData['error'] = response.data;
        } else {
            signinData['errorStatus'] = "fieldError";
            signinData['error'] = response.data.map(fieldError => ({field: fieldError.field, defaultMessage: fieldError.defaultMessage}))
        }
    }
    
    return signinData;
}