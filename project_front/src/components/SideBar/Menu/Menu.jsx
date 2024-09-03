import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { sideBarModalAtom } from '../../../atoms/modalAtoms';

function Menu({ path, title, count, icon }) {
    const setSideBarModalState = useSetRecoilState(sideBarModalAtom);
    const nav = useNavigate()

    const handleOnClick = () => {
        nav(path);
        setSideBarModalState(false);
    }

    return (
        <div css={s.menuContainer} onClick={handleOnClick}>
            <div css={s.menuHeader}>
                {icon}
                <div>{count}</div>
            </div>
            <div css={s.menuMain}>
                {title}
            </div>
        </div>
    )
}

export default Menu;