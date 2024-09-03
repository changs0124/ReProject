/** @jsxImportSource @emotion/react */
import MainContainer from "../../components/MainContainer/MainContainer";
import * as s from "./style";
import ListBox from "../../components/TodoToday/ListBox/ListBox";
import { IoIosArrowForward } from "react-icons/io";
import { useQueryClient } from "react-query";

function TodoTodayPage(props) {
    const queryClient = useQueryClient();
    const todoToday = queryClient.getQueryData("getTotoTodayQuery");

    const parse = (value) => (value < 10 ? "0" : "") + value;
    const now = new Date();
    const year = now.getFullYear();
    const month = parse(now.getMonth() + 1);
    const day = parse(now.getDate());
    const today = `${year}-${month}-${day}`

    return (
        <MainContainer>
            <div css={s.layout}>
                <div css={s.header}>
                    {today}
                </div>
                <div css={s.main}>
                    <ListBox todayList={todoToday?.data.filter(todo => todo.status === 1)} title={"ToDo"} />
                    <IoIosArrowForward />
                    <ListBox todayList={todoToday?.data.filter(todo => todo.status === 2)} title={"Done"} />
                </div>
            </div>
        </MainContainer>
        
    );
}

export default TodoTodayPage;