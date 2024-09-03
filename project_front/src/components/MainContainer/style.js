import { css } from "@emotion/react";

export const layout = css`
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 55px 10px 0px 10px;
    width: 100%;
    height: 100%;
    background-color: #efefef;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }

    @keyframes rotateStart {
        from {
            rotate: 0deg;
        }
        to {
            rotate: -45deg;
        }
    }

    @keyframes rotateEnd {
        from {
            rotate: -45deg;
        }
        to {
            rotate: 0deg;
        }
    }


    @keyframes togglesOpen1 {
        from {
            right: 10px;
            opacity: 0;
        }
        to {
            right: 70px;
            opacity: 1;
        }
    }

    @keyframes togglesOpen2 {
        from {
            right: 10px;
            opacity: 0;
        }
        to {
            right: 130px;
            opacity: 1;
        }
    }

    @keyframes togglesOpen3 {
        from {
            right: 10px;
            opacity: 0;
        }
        to {
            right: 190px;
            opacity: 1;
        }
    }

    @keyframes togglesClose1 {
        from {
            right: 70px;
            opacity: 1;
        }
        to {
            right: 10px;
            opacity: 0;
        }
    }

    @keyframes togglesClose2 {
        from {
            right: 130px;
            opacity: 1;
        }
        to {
            right: 10px;
            opacity: 0;
        }
    }

    @keyframes togglesClose3 {
        from {
            right: 190px;
            opacity: 1;
        }
        to {
            right: 10px;
            opacity: 0;
        }
    }
`;

export const toggleBar = css`
    box-sizing: border-box;
    display: flex;
    align-self: flex-end;
    padding: 10px 0px;
    width: fit-content;
`;

export const toggleIcon = (ani) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-color: #dbdbdb;
    animation: ${ani} 0.5s forwards;
    z-index: 98;
    cursor: pointer;

    &:active {
        background-color: #dbdbdb99;
    }

    & svg {
        position: absolute;
        font-size: 40px;
    } 
`;

export const toggleIcons = (ani) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    cursor: pointer;
    animation: ${ani} 0.5s forwards;
    background-color: #dbdbdb;

    &:active {
        background-color: #dbdbdb99;
    }

    & svg {
        font-size: 30px;
    } 
`;