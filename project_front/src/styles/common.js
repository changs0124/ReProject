import { css } from "@emotion/react";

export const reset = css`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap');
    * {
        font-family: "Noto Sans KR";
        font-weight: 400;
        font-size: 16px;
    }

    html, body, #root {
        margin: 0;
        padding: 0;
        height: 100%;
        background-color: #555555;
    }

    h1, h2, h3, ul, p {
        margin: 0;
        padding: 0;
    }

    button {
        border: none;
        padding: 5px 10px;
        color: black;
        background-color: transparent;
        outline: none;
        cursor: pointer;
    }

    button:active {
        color: #eeeeee;
        background-color: transparent;
    }

    button:disabled {
        color: #eeeeee;
        background-color: transparent;
        cursor: default;
    }

    @keyframes ModalOpen {
        from {
            inset: auto -320px -570px auto;
        }
        to {
            inset: auto 10px 10px auto;
        }
    }

    @keyframes ModalClose {
        from {
            inset: auto 10px 10px auto;
        }
        to {
            inset: auto -320px -570px auto;
        }
    }
`;