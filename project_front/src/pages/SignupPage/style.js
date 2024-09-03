import { css } from "@emotion/react";

export const layout = css`
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 10px 0px 10px;
    width: 100%;
    height: 100%;
    background-color: #efefef;
    z-index: 98;
`;

export const container = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    height: 50%;

    & > p {
        margin-bottom: 10px;
        font-size: 25px;
    }
`;

export const usernameBox = css`
    margin-bottom: 10px;
    width: 100%;
    & > input {
        box-sizing: border-box;
        border: none;
        border-radius: 10px;
        padding: 5px 10px;
        width: 100%;
        height: 40px;
        outline: none;
    }

    & > p {
        
    }
`;

export const passwordBox = css`
    display: flex;
    flex-direction: column;
    width: 100%;

    & > input {
        box-sizing: border-box;
        margin-bottom: 10px;
        border: none;
        border-radius: 10px;
        padding: 5px 10px;
        width: 100%;
        height: 40px;
        outline: none;
    }

    & p {
        
    }
`;

export const nameBox = css`
    margin-bottom: 10px;
    width: 100%;

    & > input {
        box-sizing: border-box;
        border: none;
        border-radius: 10px;
        padding: 5px 10px;
        width: 100%;
        height: 40px;
        outline: none;
    }

    & > p {
        
    }
`;

export const buttonBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;