/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import * as s from "./style";
import { TODOMENUS } from "../../../constants/menus";
import { useSetRecoilState } from "recoil";
import { sideBarModalAtom } from "../../../atoms/modalAtoms";
import { useQueryClient } from "react-query";


function MenuList({title, children}) {    
    return (
        <div css={s.layout}>
            <div css={s.header}>{title}</div>
            {children}   
        </div>
    );
}

export default MenuList;