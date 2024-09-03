import { css } from "@emotion/react";

export const toggleIcon = css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 99;
    right: 0px;
    bottom: 0px;
    width: 50px;
    height: 50px;
    outline: none;
    cursor: pointer;

    & svg {
        position: absolute;
        z-index: 99;
        font-size: 40px;
    }
`;

