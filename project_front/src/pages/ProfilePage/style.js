import { css } from "@emotion/react";

export const layout = css`
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 10px 10px 10px;
    width: 100%;
    height: 100%;
    background-color: #efefef;
    z-index: 98;
`;

export const cancelBox = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;

    & > svg {
        font-size: 40px;
        font-weight: 600;
        cursor: pointer;
    }
`;

export const container = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: 100%;
    height: 90%;
    background-color: #fafafa;
`;

export const userBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    border-radius: 10px;
    align-items: center;
    padding: 10px;
    width: 40%;
    height: 90%;
    background-color: #efefef;
`;

export const userimg = css`
    box-sizing: border-box;
    margin-bottom: 10px;
    border-radius: 50%;
    width: 300px;
    height: 300px;
    overflow: hidden;
    background-color: #fafafa;
    cursor: pointer;
    & > img {
        height: 100%;
    }
`;

export const userInfo = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    width: 90%;
    height: 30%;
`;

export const userDetailsBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    padding: 10px;
    width: 55%;
    height: 90%;
    background-color: #efefef;
`;

export const userDetailsInfo = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 10px;
    width: 90%;
    height: 50%;
    background-color: #fafafa;

    & > input {
        margin-bottom: 10px;
    }
`;


