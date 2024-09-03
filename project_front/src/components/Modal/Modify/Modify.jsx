import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useQueryClient } from 'react-query';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { modifyModalAtom } from '../../../atoms/modalAtoms';
import { TodoIdAtom, modifyTodoAtom } from '../../../atoms/todoAtoms';
import ModalLayout from '../ModalLayout/ModalLayout';
import { updateTodo } from '../../../apis/todoApis/putApi';
import { deleteTodoApi } from '../../../apis/todoApis/deleteApi';
import ReactSelect from 'react-select';
import { importantOptions } from '../../../constants/options';

function Modify({ containerRef }) {
    const queryClient = useQueryClient();

    const todo = useRecoilValue(modifyTodoAtom);
    const [ isOpen, setOpen ]  = useRecoilState(modifyModalAtom);

    const setSelectedTodoId = useSetRecoilState(TodoIdAtom);

    const [ animation, setAnimation ] = useState("ModalOpen");
    const [ modifyTodo, setModifyTodo ] = useState(todo);
    const [ submitButtonDisabled, setSubmitButtonDisabled ] = useState(true); 

    useEffect(() => {
        setModifyTodo(todo);
    }, [todo])

    useEffect(() => {
        const disabled = JSON.stringify(todo) === JSON.stringify(modifyTodo) || !todo?.title?.trim();
        setSubmitButtonDisabled(disabled);
    }, [modifyTodo])

    const hanldeModifyOnChange  = (e) => {
        setModifyTodo(modifyTodo => ({
            ...modifyTodo,
            [e.target.name]: e.target.value
        }));
    }

    const handleImportantSelectOnChange = (option) => {
        setModifyTodo(modifyTodo => ({
            ...modifyTodo,
            important: option.value
        }));
    }

    const handleModifyOnClick = async () => {
        await updateTodo(modifyTodo);
        closeModal();
    }

    const handleDelteOnClick = async () => {
        await deleteTodoApi(modifyTodo.todoId);
        closeModal();
    }

    const closeModal = () => {
        setAnimation("ModalClose");
        setTimeout(() => {
            setAnimation("ModalOpen");
            setOpen(false);
        }, 500);
        setSelectedTodoId(0);
        queryClient.invalidateQueries("getTotoTodayQuery")
    }

    return (
        <ModalLayout closeModal={closeModal} isOpen={isOpen} animation={animation} containerRef={containerRef}>
            <div css={s.layout}>
                <div css={s.header}>
                    <p>Modify</p>
                    <button onClick={handleModifyOnClick} disabled={submitButtonDisabled}>update</button>
                </div>
                <div css={s.main}>
                    <div css={s.selectDateBox}>
                        <input type="datetime-local" name="todoDateTime" onChange={hanldeModifyOnChange} value={modifyTodo.todoDateTime} />
                    </div>
                    <div css={s.titleAndContentBox}>
                        <input type="text" name="title" onChange={hanldeModifyOnChange} value={modifyTodo.title} placeholder="Title"/>
                        <textarea name="content" onChange={hanldeModifyOnChange} value={modifyTodo.content} placeholder="Content"/>
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
                        value={importantOptions.filter(option => option.value === modifyTodo.important)[0]}
                    />
                    <div css={s.buttonBox}>
                        <button onClick={handleDelteOnClick}>Delete</button>
                    </div>
                </div>
            </div>
        </ModalLayout>

    );
}

export default Modify;