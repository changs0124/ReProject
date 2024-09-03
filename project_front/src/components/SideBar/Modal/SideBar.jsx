/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useState } from 'react';
import ReactModal from 'react-modal';
import { sideBarModalAtom } from '../../../atoms/modalAtoms';
import { useRecoilState } from 'recoil';
import { IoIosClose } from "react-icons/io";
import UserInfo from "../UserInfo/UserInfo";
import MenuList from "../MenuList/MenuList";
import Menu from "../Menu/Menu";
import { POSTMENUS, TODOMENUS } from "../../../constants/menus";
import { useQueryClient } from "react-query";

function SideBar({ layoutRef }) {
    const [ isOpen, setOpen ] = useRecoilState(sideBarModalAtom);
    const [ animation, setAnimation ] = useState("sideBarModalContentOpen");

    const queryClient = useQueryClient();
    const counts = queryClient.getQueryData("getTodoCountsQuery");

    const closeModal = () => {
        setAnimation("sideBarModalContentClose");
        setTimeout(() => {
            setAnimation("sideBarModalContentOpen");
            setOpen(false);
        }, 500);
    }

    return (
        <ReactModal
            style={{
                overlay: {
                    position: "absolute",
                    backgroundColor: "transparent"
                },
                content: {
                    inset: "auto 0 0",
                    boxSizing: "border-box",
                    borderTopRightRadius: "10px",
                    borderBottomRightRadius: "10px",
                    padding: "10px 10px",
                    width: "20%",
                    height: "100%",
                    overflowY: "auto",
                    scrollbarWidth: "none",
                    animation: `${animation} 0.6s 1`,
                    zIndex: "99"
                }
            }}
            isOpen={isOpen}
            onRequestClose={closeModal}
            ariaHideApp={false}
            parentSelector={() => layoutRef.current}
        >
        <div css={s.layout}>
            <div css={s.closeIcon} onClick={closeModal}><IoIosClose /></div>
            <UserInfo closeModal={closeModal}/>
            <MenuList title="To Do">
                <Menu title={TODOMENUS.today.title} path={TODOMENUS.today.path} icon={TODOMENUS.today.icon} count={counts?.data.today}/>
                <Menu title={TODOMENUS.all.title} path={TODOMENUS.all.path} icon={TODOMENUS.all.icon} count={counts?.data.all}/>
                <Menu title={TODOMENUS.important.title} path={TODOMENUS.important.path} icon={TODOMENUS.important.icon} count={counts?.data.important}/>
                <Menu title={TODOMENUS.done.title} path={TODOMENUS.done.path} icon={TODOMENUS.done.icon} count={counts?.data.done}/>
            </MenuList>
            <MenuList title="Post">
                <Menu title={POSTMENUS.post.title} path={POSTMENUS.post.path} icon={POSTMENUS.post.icon} count={1}/>
            </MenuList>
        </div>
        </ReactModal>
    );
}

export default SideBar;