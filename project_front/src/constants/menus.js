import { BsCalendar4Week, BsCalendarEvent,  BsCalendarCheck } from "react-icons/bs";

export const TODOMENUS = {
    all: {
        path: "/todo/all",
        title: "All",
        icon: <BsCalendarEvent />
    },
    today: {
        path: "/todo/today",
        title: "Today",
        icon: <BsCalendar4Week />
    },
    important: {
        path: "/todo/important",
        title: "Important",
        icon: <BsCalendarCheck />
    },
    done: {
        path: "/todo/done",
        title: "Done",
        icon: <BsCalendarCheck />
    }
}

export const POSTMENUS = {
    post: {
        path: "/post/",
        title: "Post",
        icon: <BsCalendarCheck />
    }
}