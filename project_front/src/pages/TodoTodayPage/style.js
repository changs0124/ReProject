import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const header = css`
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 5px 10px;
    width: 100%;
    font-size: 20px;
    font-weight: 500;
    background-color: #ffffff;
    box-shadow: 0px 0px 5px #00000011;
    cursor: default;
`;

export const main = css`
    display: flex;
    justify-content: space-between;
    height: 100%;

    & > svg {
        align-self: center;
        font-size: 50px;
    }
`;
