import { Movie } from "../../types/Movie"
import { FaBookmark } from "react-icons/fa"

interface Props {
    movies: Array<Movie>
}
const Card = ({ movies }: Props) => {
    const path = "http://image.tmdb.org/t/p/original"
    return (
        <div className="text-white">
            <div className="grid grid-cols-5 gap-4">
                {movies.map((item) => {
                    return (
                        <div key={item.id} className="w-[300px] relative">
                            <img
                                src={`${path}${item.poster_path}`}
                                alt=""
                                className="h-52 object-cover w-full"
                            />
                            <div className="mt-2">
                                <div>{item.release_date.slice(0, 4)}</div>
                                <h1 className="text-xl">{item.title}</h1>
                            </div>
                            <div className="absolute top-2 right-2 hover:cursor-pointer">
                                <FaBookmark />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Card
