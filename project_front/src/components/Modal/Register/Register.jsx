/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useRecoilState } from "recoil";
import { registerModalAtom } from "../../../atoms/modalAtoms";
import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import ModalLayout from "../ModalLayout/ModalLayout";
import { addTodoApi } from "../../../apis/todoApis/postApi";
import ReactSelect from "react-select";
import { importantOptions } from "../../../constants/options";


function Register({ containerRef }) {
    const queryClient = useQueryClient();

    const [ isOpen, setOpen ]  = useRecoilState(registerModalAtom);

    const [ animation, setAnimation ] = useState("ModalOpen");


    const closeModal = () => {
        setAnimation("ModalClose");
        setTimeout(() => {
            setAnimation("ModalOpen");
            setOpen(false);
        }, 500);
        queryClient.invalidateQueries("getTotoTodayQuery")
    }

    useEffect(() => {
        const parse = (value) => (value < 10 ? "0" : "") + value;

        const now = new Date();
        const year = now.getFullYear();
        const month = parse(now.getMonth() + 1);
        const day = parse(now.getDate());
        const hour = parse(now.getHours());
        const min = parse(now.getMinutes());

        setTodo(todo => ({
            ...todo,
            dateTime: `${year}-${month}-${day}T${hour}:${min}`
        }));
    }, []);


    const [ todo, setTodo ] = useState({
        title: "",
        content: "",
        dateTime: "",
        important: 1,
    });

    const handleOnChange = (e) => {
        setTodo(todo => ({
            ...todo,
            [e.target.name]: e.target.value
        }));
    }

    const handleImportantSelectOnChange = (option) => {
        setTodo(todo => ({
            ...todo,
            important: option.value
        }));
    }

    const handleSubmitClick = async () => {
        await addTodoApi(todo);
        setTodo(({
            title: "",
            content: "",
            dateTime: "",
            important: 1
        }))
        closeModal();
    }

    return (
        <ModalLayout closeModal={closeModal} animation={animation} containerRef={containerRef} isOpen={isOpen}  >
            <div css={s.layout}>
                <div css={s.header}>
                    <p>Register</p>
                    <button onClick={handleSubmitClick} disabled={!todo.title.trim() || !todo.content.trim()}>add</button>
                </div>
                <div css={s.main}>
                    <div css={s.selectDateBox}>
                        <input type="datetime-local" name="dateTime" onChange={handleOnChange} value={todo.dateTime} />
                    </div>
                    <div css={s.titleAndContentBox}>
                        <input type="text" name="title" onChange={handleOnChange} value={todo.title} placeholder="Title"/>
                        <textarea name="content" onChange={handleOnChange} value={todo.content} placeholder="Content"/>
                    </div>
                    <ReactSelect
                        onChange={handleImportantSelectOnChange}
                        styles={{
                            control: (style) => ({
                                ...style, 
                                border: "none", 
                                outline: "none", 
                                boxShadow: "none"
                            }),
                        }}
                        options={importantOptions}
                        value={importantOptions.filter(option => option.value === todo.important)[0]}
                    />
                </div>
            </div>
        </ModalLayout>
    );
  
}

export default Register;