import { useGlobalState } from "../context/GlobalStateContext"
import { Movie } from "../../types/Movie"
import Card from "./Card"

const Boomarks = () => {
    const { state, dispatch } = useGlobalState()

    const addBookmark = (movie: Movie) => {
        dispatch({ type: "ADD_BOOKMARK", payload: movie })
    }

    return (
        <div className="grid grid-cols-4 gap-4">
            {state.bookmarks.map((item: Movie, index: number) => {
                return <Card key={index} movie={item} handleAddBookmarks={addBookmark} />
            })}
        </div>
    )
}

export default Boomarks
