import React, { useEffect } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useRecoilState, useSetRecoilState } from 'recoil';
import { modifyModalAtom } from '../../../atoms/modalAtoms';
import { TodoIdAtom, modifyTodoAtom } from '../../../atoms/todoAtoms';
import { changeTodoStatus } from '../../../apis/todoApis/putApi';
import { importantForListItems } from '../../../constants/options';
import { useQueryClient } from 'react-query';

function ListItem({todo}) {
    const setModifyModalState = useSetRecoilState(modifyModalAtom);
    const setModifyTodo = useSetRecoilState(modifyTodoAtom);
    const [ selectedTodoId, setSelectedTodoId ] = useRecoilState(TodoIdAtom);

    const queryClient = useQueryClient();

    useEffect(() => {
        if(selectedTodoId === todo.todoId) {
            setModifyModalState(true);
            setModifyTodo({
                ...todo,
                todoDateTime: todo.todoDateTime.replaceAll(" ", "T")
            })
        }
    }, [selectedTodoId])

    const handleChangeStatusOnChange = async (e) => {
        await changeTodoStatus(e.target.value);
        queryClient.invalidateQueries("getTotoTodayQuery");
    }

    const handleModifyOnClick = (todoId) => {
        setSelectedTodoId(todoId);
    }

    return (
        <div css={s.todoBox}>
            <div css={s.checkBox}>
                <p>{importantForListItems[todo.important]}{todo.todoDateTime.slice(10)}</p>
                <input type="checkbox" name="todo" id={todo.todoId} onChange={handleChangeStatusOnChange} checked={todo.status === 2} value={todo.todoId}/>
                <label htmlFor={todo.todoId} />
            </div>
            <div css={s.contentBox}>
                <p onClick={() => handleModifyOnClick(todo.todoId)}>{todo.title}</p>
            </div>
        </div>
    );
}

export default ListItem;