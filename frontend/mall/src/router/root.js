import { Suspense, lazy } from "react";
import todoRouter from "./todoRouter";

const { createBrowserRouter } = require("react-router-dom");

const Loading = <div>Loading</div>
const Main = lazy(() => import("../pages/MainPage"))
const About = lazy(() => import("../pages/AboutPage"))
const TodoIndex = lazy(() => import("../pages/todo/IndexPage"))

const root = createBrowserRouter([

    {
        path: "",
        element: <Suspense fallback={Loading}><Main /></Suspense>
    },
    {
        path: "about",
        element: <Suspense fallback={Loading}><About /></Suspense>
    },
    {
        path: "todo",
        element: <Suspense fallback={Loading}><TodoIndex /></Suspense>,
        /* 중첩 라우팅
            - childeren 속성을 이용한 중첩적인 라우팅 설정을 적용할 수 있다.
            - 페이지가 많아지면 root.js 파일이 너무 복잡해지는 단점이 있기 때문에 
              별도의 함수에서 children 속성값에 해당하는 설정을 반환하는 방식이 알아보기 쉽다.
            - root.js 파일의 설정 일부를 별도의 파일로 분리하고 설정을 반환한다.
        */
        children: todoRouter()
    }

])

export default root;