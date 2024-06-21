// import { useCallback } from "react";
import { useParams } from "react-router-dom";
import ReadComponent from "../../components/todo/ReadComponent";

const ReadPage = () => {

    // 경로 자체의 값을 사용할 때에는 useParams()을 사용한다.
    const { tno } = useParams()

    // 동적으로 데이터를 처리해서 이동하는 경우 useNavigate()를 사용한다.
    // const navigate = useNavigate()

    /* 쿼리스트링의 유지
        - 조회페이지는 다시 목록으로 이동할 수 있기 때문에 page와 size처럼 쿼리스트링으로 전달되는 데이터를 유지하면서 이동해야 한다.
        - useSearchParams()을 이용해서 쿼리스트링으로 전달된 데이터를 확인한다.
        - createSearchParams()을 이용해서 이동시에 필요한 쿼리스트링을 만들어낸다.
        - navigate()를 이용한 이동시에 활용한다.
    */
    // const [queryParams] = useSearchParams()

    // const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1
    // const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10

    // const queryStr = createSearchParams({ page, size }).toString()

    // 수정 화면으로 이동
    // const moveToModify = useCallback((tno) => {
    //     navigate({
    //         pathname: `/todo/modify/${tno}`,
    //         search: queryStr
    //     })
    // }, [tno, page, size])

    // 목록으로 이동
    // const moveToList = useCallback(() => {
    //     navigate({ pathname: `/todo/list`, search: queryStr })
    // }, [page, size])

    return (
        <div className="font-extrabold w-full bg-white mt-6">

            <div className="text-2xl">
                Todo Read Page Component {tno}
            </div>

            <ReadComponent tno={tno}></ReadComponent>

        </div>
    );

}

export default ReadPage;