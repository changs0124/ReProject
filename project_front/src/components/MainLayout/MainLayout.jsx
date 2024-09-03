/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
import * as s from "./style";
import { IoCellularSharp } from "react-icons/io5";
import { IoIosWifi, IoIosBatteryFull, IoIosMenu } from "react-icons/io";
import { useSetRecoilState } from "recoil";
import { sideBarModalAtom } from "../../atoms/modalAtoms";
import SideBar from "../SideBar/Modal/SideBar";



function MainLayout({ children }) {
    const setSideBarModalState = useSetRecoilState(sideBarModalAtom);

    const [ sideBarModalElement, setSideBarModalElement ] = useState(<></>);
    const [ clock, setClock ] = useState("0:00");

    const layoutRef = useRef();

    useEffect(() => {
        setInterval(() => {
            const now = new Date();
            const hours = now.getHours();
            const minutes = (now.getMinutes() < 10 ? "0" : "") + now.getMinutes();
            setClock(`${hours}:${minutes}`);
        }, 1000);
    }, []);


    useEffect(() => {
        if(!!layoutRef){
            setSideBarModalElement(<SideBar layoutRef={layoutRef} />);
        }
    }, [layoutRef])

    const handleSideBarModalOpenClick = () => {
        setSideBarModalState(true);
    }

    return (
        <div css={s.layout} >
            {sideBarModalElement}
            <div css={s.frame} ref={layoutRef}>
                <div css={s.topBar}>
                    <div css={s.clock}>{clock}</div>
                    <div css={s.rightItems}><IoCellularSharp /><IoIosWifi /><IoIosBatteryFull /></div>
                </div>
                <div css={s.sideBar} onClick={handleSideBarModalOpenClick}><IoIosMenu /></div>
                {children}
            </div>
        </div>
    );
}

export default MainLayout;