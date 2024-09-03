import { atom } from "recoil";

export const TodoIdAtom = atom({
    key: "TodoId",
    default: 0
})

export const modifyTodoAtom = atom({
    key: "modifyTodo",
    default: {
        todoId: 0,
        title: "",
        content: "",
        todoDateTime: "",
        important: 1,
    }
});