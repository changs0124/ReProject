import { css } from "@emotion/react";

export const todoBox = css`
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 5px 10px;
    width: 49%;
    height: 70px;
    background-color: #efefef;
    
    &:active {
        box-shadow: 0px 0px 3px #00000055 inset;
    }
`;

export const checkBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    width: 100%;

    & > p {
        margin: 0;
        font-size: 16px;
    }

    & > input[type="checkbox"] {
        display: none;
    }

    & > label {
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        background-color: #ffffff;
        cursor: pointer;
    }

    & > input[type="checkbox"]:checked + label::after {
        content: "";
        box-sizing: border-box;
        border-radius: 50%;
        width: 14px;
        height: 14px;
        background-color: #7a7a7a;
    }
`;

export const contentBox = css`
    
    & > p {
        flex-grow: 1;
        margin: 0;
        font-size: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        cursor: pointer;
    }
`;