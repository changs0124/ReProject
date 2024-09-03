import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import ListItem from '../ListItem/ListItem';

function ListBox({todayList, title}) {

    return (
        <div css={s.layout}>
            <p>{title}</p>
            <div css={s.list}>
            {
                todayList?.map(todo =>
                    <ListItem key={todo.todoId} todo={todo} />
                )
            }
            </div>
        </div>
    );
}

export default ListBox;