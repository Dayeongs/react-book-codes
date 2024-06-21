import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";

const Loading = <div>Loading</div>
const TodoList = lazy(() => import("../pages/todo/ListPage"))
const TodoRead = lazy(() => import("../pages/todo/ReadPage")) 
const TodoAdd = lazy(() => import("../pages/todo/AddPage"))
const TodoModify = lazy(() => import("../pages/todo/ModifyPage")) 

const todoRouter = () => {
    return [
        { 
            path: "list",
            element: <Suspense fallback={Loading}><TodoList /></Suspense>
        },
        {
            /* <Navigate>의 replace 속성을 이용한 리다이렉션 처리 
                - '/todo/' 경로로 접근하는 경우 자동으로 '/todo/list'를 바라볼 수 있도록 처리한다.
                - '/todo/' 이하의 경로가 지정되지 않았을 때 동작하는 빈 경로의 설정을 추가한다. 
            */
            path: "",
            element: <Navigate replace to="list" />
        },
        {
            /* URL params 사용하기
                - ':'은 경로의 일부를 변수로 사용하기 위한 설정이다.
            */
            path: "read/:tno",
            element: <Suspense fallback={Loading}><TodoRead /></Suspense>
        },
        { 
            path: "add",
            element: <Suspense fallback={Loading}><TodoAdd /></Suspense>
        },
        { 
            path: "modify/:tno",
            element: <Suspense fallback={Loading}><TodoModify /></Suspense>
        }

    ]
}

export default todoRouter;