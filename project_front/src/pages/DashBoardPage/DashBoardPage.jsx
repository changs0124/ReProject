import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import MainContainer from '../../components/MainContainer/MainContainer';

function DashBoardPage(props) {
    const parse = (value) => (value < 10 ? "0" : "") + value;
    const now = new Date();
    const year = now.getFullYear();
    const month = parse(now.getMonth() + 1);
    const day = parse(now.getDate());
    const today = `${year}-${month}-${day}`

    return (
        <MainContainer>
            <div css={s.layout} >
                <div css={s.postBox}></div>
                <div css={s.todoContainer}>
                    <div css={s.todayBox}>{today}</div>
                    <div css={s.todoBox}></div>
                </div>
            </div>
        </MainContainer>
    );
}

export default DashBoardPage;