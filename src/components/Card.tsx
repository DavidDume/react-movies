import { Movie } from "../../types/Movie"
import { FaBookmark } from "react-icons/fa"

interface Props {
    movie: Movie
    handleAddBookmarks: (movie: Movie) => void
}
const Card = ({ movie, handleAddBookmarks }: Props) => {
    const path = "http://image.tmdb.org/t/p/original"
    return (
        <div className="text-white">
            <div className="grid grid-cols-5 gap-4">
                <div key={movie.id} className="w-[300px] relative">
                    <img
                        src={`${path}${movie.poster_path}`}
                        alt=""
                        className="h-52 object-cover w-full"
                    />
                    <div className="mt-2">
                        <div>{movie.release_date.slice(0, 4)}</div>
                        <h1 className="text-xl">{movie.title}</h1>
                    </div>
                    <div
                        className="absolute top-2 right-2 hover:cursor-pointer"
                        onClick={() => handleAddBookmarks(movie)}
                    >
                        <FaBookmark />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
