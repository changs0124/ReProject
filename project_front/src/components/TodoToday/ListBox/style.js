import { css } from '@emotion/react';

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    padding: 5px 10px;
    width: 47%;
    height: 100%;
    background-color: #ffffff;
    cursor: default;

    & p {
        margin-bottom : 10px;
        border-bottom: 1px solid #efefef;
        font-weight: 500;
    }

`;

export const list = css`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: flex-start;
    flex-wrap: wrap;
    flex-grow: 1;
    width: 100%;

    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
    
`;

