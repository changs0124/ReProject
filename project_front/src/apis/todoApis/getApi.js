import { instance } from "../utils/instance";

export async function todoGroupApi() {
    let response = null;
    try {
        response = await instance.get("/todo/group");
    } catch(e) {
        console.error(e);
        response = e.response;
    }

    return response;
}

export async function todoTodayApi() {
    let response = null;
    try {
        response = await instance.get("/todo/today");
    } catch(e) {
        console.error(e);
        response = e.response;
    }

    return response;
}

export async function todoCountsApi() {
    let response = null;
    try {
        response = await instance.get("/todo/counts");
    } catch(e) {
        console.error(e);
        response = e.response;
    }

    return response;
} 