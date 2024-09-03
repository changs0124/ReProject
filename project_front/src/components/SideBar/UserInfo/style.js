import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    height: 150px;
    background-color: #efefef;

    & > p {
        font-size: 18px;
        font-weight: 500;
        cursor: default;
    }
`;

export const userimage = css`
    border: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    background-color: #fafafa;
    overflow: hidden;
    cursor: default;

    & > img {
        height: 100%;
    }
`;

export const buttonBox = css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    & > button {
        border-radius: 10px;
        background-color: #fafafa;
        font-size: 14px;
        cursor: pointer;
    }
`;