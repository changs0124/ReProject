import { Global } from '@emotion/react';
import MainLayout from './components/MainLayout/MainLayout';
import { Route, Routes } from 'react-router-dom';
import { reset } from './styles/common';
import DashBoardPage from './pages/DashBoardPage/DashBoardPage';
import SigninPage from './pages/SigninPage/SigninPage';
import SignupPage from './pages/SignupPage/SignupPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import TodoTodayPage from './pages/TodoTodayPage/TodoTodayPage';
import AuthHook from './hooks/AuthHook';

function App() {
    AuthHook();
    // const nav = useNavigate();
    // const location = useLocation();

    // const [ ref, setRef ] = useState(true);

    // useEffect(() => {
    //     if(!ref) {
    //         setRef(true);
    //     }
    // }, [location.pathname]);

    // const accessTokenValid = useQuery(
    //     ["accessTokenValidQuery"],
    //     async () => {
    //         setRef(false);
    //         return await instance.get("/auth/access", {
    //             params: {
    //                 accessToken: localStorage.getItem("accessToken")
    //             }
    //         });
    //     },
    //     {
    //         enabled: ref,
    //         refetchOnWindowFocus: false,
    //         retry: 0,
    //         onSuccess: response => {
    //             const permitPaths = ["/signin", "/signup"];
    //             for(let permitPath of permitPaths) {
    //                 if(location.pathname.startsWith(permitPath)) {
    //                     alert("로그아웃 후 이용해주세요");
    //                     nav("/");
    //                     break;
    //                 }
    //             }
    //         },
    //         onError: error => {
    //             const authPaths = ["/todo"];
    //             for(let authPath of authPaths) {
    //                 if(location.pathname.startsWith(authPath)) {
    //                     alert("로그인 후 이용해주세요");
    //                     nav("/signin");
    //                     break;
    //                 }
    //             }
    //         }
    //     }
    // );

    
    // const getUserInfo = useQuery(
    //     ["getUserInfoQuery"],
    //     async () => {
    //         return await instance.get("/auth/user");
    //     },
    //     {
    //         enabled: accessTokenValid.isSuccess && accessTokenValid.data?.data,
    //         refetchOnWindowFocus: false,
    //         retry: 0
    //     }
    // );

    return (
        <>
            <Global styles={reset} />
            <MainLayout>
                <Routes>
                    <Route path="/" element={<DashBoardPage />} />
                    <Route path="/signin" element={<SigninPage />} />
                    <Route path="/signup" element={<SignupPage />} />

                    <Route path='/profile' element={<ProfilePage />}/>

                    <Route path="/todo/all" element={<TodoTodayPage />}/>
                    <Route path="/todo/today" element={<TodoTodayPage />}/>
                    <Route path="/todo/important" element={<TodoTodayPage />}/>
                    <Route path="/todo/done" element={<TodoTodayPage />}/>
                    <Route path="*" element={ <h1>Not Found</h1> } />
                </Routes>
            </MainLayout>
        </>
    );
}

export default App;