import { instance } from "../utils/instance";

export async function changeTodoStatus(todoId) {
    let response = null
    try {
        response = instance.put(`/todo/${todoId}/status`);
    } catch(e) {
        console.error(e);
        response = e.response;
    }

    return response;
}

export async function updateTodo(data) {
    let response = null
    try {
        response = instance.put("/todo/${todoId}", data);
    } catch(e) {
        console.error(e);
        response = e.response;
    }

    return response;
}