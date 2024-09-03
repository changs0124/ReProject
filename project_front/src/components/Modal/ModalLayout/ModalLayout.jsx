import React, { Children } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { IoIosClose } from "react-icons/io"
import ReactModal from 'react-modal';

function ModalLayout({ containerRef, closeModal, isOpen, animation, children}) {
    return (
        <ReactModal
        style={{
            overlay: {
                position: "absolute",
                backgroundColor: "transparent"
            },
            content: {
                inset: "auto 10px 10px auto",
                boxSizing: "border-box",
                borderRadius: "10px",
                padding: "10px",
                width: "30%",
                height: "70%",
                animation: `${animation} 0.7s 1`,
                zIndex: "99"
            }
        }}
        isOpen={isOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        parentSelector={() => containerRef.current}
    >
    {children}
    <button css={s.toggleIcon} onClick={closeModal}><IoIosClose /></button>
    </ReactModal>
    );
}

export default ModalLayout;