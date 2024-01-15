import { Movie } from "../../types/Movie"
import { FaBookmark } from "react-icons/fa"

interface Props {
    movies: Array<Movie>
    handleAddBookmarks: (movie: Movie) => void
}

const Trending = ({ movies, handleAddBookmarks }: Props) => {
    const path = "http://image.tmdb.org/t/p/w500"
    return (
        <div className="text-white">
            <h1 className="text-3xl">Trending</h1>
            <div className="w-auto overflow-hidden">
                <div className="flex space-x-4 p-4 pl-0">
                    {movies.map((item) => {
                        return (
                            <div key={item.id} className="flex-shrink-0 w-[500px] relative">
                                <img
                                    src={`${path}${item.poster_path}`}
                                    alt=""
                                    className="object-none w-full h-52"
                                />
                                <div className="absolute bottom-3 left-2 ">
                                    <div>{item.release_date.slice(0, 4)}</div>
                                    <h1 className="text-xl">{item.title}</h1>
                                </div>
                                <div
                                    className="absolute top-2 right-2 hover:cursor-pointer"
                                    onClick={() => handleAddBookmarks(item)}
                                >
                                    <FaBookmark />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Trending
