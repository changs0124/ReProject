import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const frame = css`
    position: relative;
    border: 5px solid #000000;
    border-radius: 25px;
    width: 1064px;
    height: 814px;
    background-color: transparent;
    overflow: hidden;
`

export const topBar = css`
    box-sizing: border-box;
    position: absolute;
    z-index: 99;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px;
    width: 100%;
    height: 30px;
`;

export const clock = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    cursor: default;
`;

export const rightItems = css`
    display: flex;
    justify-content: center;
    align-items: center;

    & * {
        font-size: 20px;
    }

    & *:nth-of-type(2) {
        margin: 0px 5px;
    }
`;

export const sideBar = css`
    box-sizing: border-box;
    position: absolute;
    top: 30px;
    display: flex;
    align-items: center;
    padding: 0px 10px;
    width: 100%;
    z-index: 98;
    
    & > svg {
        font-size: 25px;
        cursor: pointer;
    }
`;