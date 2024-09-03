import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const header = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #efefef;

    & > p {
        font-size: 20px;
        font-weight: 500;
        cursor: default;
    }

    & > button {
        font-weight: 500;
        cursor: pointer;
    }
`;

export const main = css`
    box-sizing: border-box;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    width: 100%;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #efefef;
`;

export const selectDateBox = css`
    outline: none;
    margin-bottom: 5px;
    height: 40px;
    & > input {
        box-sizing: border-box;
        border: none;
        border-radius: 5px;
        padding: 5px 10px;
        outline: none;
        width: 100%;
        height: 100%;
        font-size: 18px;
        font-weight: 500;

        ::-webkit-calendar-picker-indicator {
            cursor: pointer;
            padding-left: 20px;
        }
    }
`;  

export const titleAndContentBox = css`

    & > input {
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #dbdbdb;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        padding: 5px 10px;
        width: 100%;
        outline: none;
    }

    & > textarea {
        box-sizing: border-box;
        border: none;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        padding: 5px 10px;
        width: 100%;
        height: 150px;
        outline: none;
        resize: none;
    }
`;

