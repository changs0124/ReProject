import { css } from "@emotion/react";

export const menuContainer = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    border-radius: 10px;
    width: 100%;
    padding: 5px 10px;
    background-color: #fafafa;
    box-shadow: 0px 0px 3px #00000011;
    cursor: pointer;
    &:active {
        box-shadow: 0px 0px 3px #00000055 inset;
    }
`;

export const menuHeader = css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;

    & > svg {
        font-size: 18px;
    }

    & > div {
        font-size: 18px;
        font-weight: 500;
        line-height: 1;
    }
`;

export const menuMain = css`
    font-size: 20px;
    font-weight: 500;
`;