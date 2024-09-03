/** @jsxImportSource @emotion/react */
import { useSetRecoilState } from "recoil";
import * as s from "./style";
import { registerModalAtom } from "../../atoms/modalAtoms";
import { useEffect, useRef, useState } from "react";
import { IoIosAdd, IoIosSearch  } from "react-icons/io";
import { IoPencil } from "react-icons/io5";
import Register from "../Modal/Register/Register";
import Modify from "../Modal/Modify/Modify";

function MainContainer({ children }) {
    const setRegisterModalState  = useSetRecoilState(registerModalAtom);

    const [ registerModalElement, setRegisterModalElement ] = useState(<></>);
    const [ modifyModalElement, setModifyModalElement ] = useState(<></>);

    const [ iconOpen, setIconOpen ] = useState(false);
    const [ iconAnimation, setIconAnimation ] = useState("rotateEnd");
    const [ iconAnimation1, setIconAnimation1 ] = useState("togglesClose1");
    const [ iconAnimation2, setIconAnimation2 ] = useState("togglesClose2");

    const containerRef = useRef();

    useEffect(() => {
        if(iconOpen) {
            setIconAnimation("rotateStart");
            setIconAnimation1("togglesOpen1");
            setIconAnimation2("togglesOpen2");
        } else {
            setIconAnimation("rotateEnd");
            setIconAnimation1("togglesClose1");
            setIconAnimation2("togglesClose2");
        }
    }, [iconOpen])

    useEffect(() => {
        if(!!containerRef){
            setRegisterModalElement(<Register containerRef={containerRef} />);
            setModifyModalElement(<Modify containerRef={containerRef} />);
        }
    }, [containerRef])

    const handleRegisterModalOpenClick = () => {
        setRegisterModalState(true);
    }

    const handleToggleClick = () => {
        setIconOpen(!iconOpen);
    }

    return (
        <div css={s.layout} ref={containerRef}>
            {registerModalElement}
            {modifyModalElement}
            {children}
            <div css={s.toggleBar} onClick={handleToggleClick}>
                <div css={s.toggleIcon(iconAnimation)}>
                    <IoIosAdd />
                </div>
                <div css={s.toggleIcons(iconAnimation1)} onClick={handleRegisterModalOpenClick}>
                    <IoPencil />
                </div>
                <div css={s.toggleIcons(iconAnimation2)}>
                    <IoIosSearch />
                </div>
            </div>
        </div>
    );
}

export default MainContainer;