import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;

    @keyframes sideBarModalContentOpen {
        from {
            inset: auto -1668px 0;
        }
        to {
            inset: auto 0 0;
        }
    }

    @keyframes sideBarModalContentClose {
        from {
            inset: auto 0 0;
        }
        to {
            inset: auto -1668px 0;
        }
    }
`;

export const closeIcon = css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;

    & > svg {
        font-size: 40px;
        cursor: pointer;
    }
`;