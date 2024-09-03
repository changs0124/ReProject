import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`;

export const postBox = css`
    box-sizing: border-box;
    border-radius: 10px;
    flex-grow: 1;
    height: 100%;
    background-color: #ffffff;
`;

export const todoContainer = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    width: 30%;
    height: 100%;
`;

export const todayBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    border-radius: 10px;
    width: 100%;
    height: 10%;
    background-color: #ffffff;
    font-size: 30px;
    font-weight: 600;
    cursor: default;
`;

export const todoBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    border-radius: 10px;
    padding: 10px 10px;
    width: 100%;
    background-color: #ffffff;
`;