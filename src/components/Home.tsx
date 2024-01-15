import { useEffect, useState } from "react"
import Trending from "./Trending"
import Card from "./Card"
import { Movie } from "../../types/Movie"

import { useGlobalState } from "../context/GlobalStateContext"

const useFetchMovies = (url: string, options: RequestInit) => {
    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url, options)
                const data = await res.json()
                setMovies(data.results)
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
    }, [url, options])

    return movies
}
const Home = () => {
    const baseUrl = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
    const recommendedUrl = "https://api.themoviedb.org/3/movie/top_rated"
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_MOVIEDB_API_KEY}`,
        },
    }

    const popularMovies = useFetchMovies(baseUrl, options)
    const recommendedMovies = useFetchMovies(recommendedUrl, options)

    const { state, dispatch } = useGlobalState()

    const addBookmark = (movie: Movie) => {
        dispatch({ type: "ADD_BOOKMARK", payload: movie })
    }

    /* const addBookmark = (movie: Movie) => {
        if (!bookmarkMovie.find((item) => item.id === movie.id)) {
            setBookmarkMovie((items) => [...items, movie])
        }
    } */

    return (
        <div>
            <Trending movies={popularMovies} handleAddBookmarks={addBookmark} />
            <h1 className="text-white text-3xl mb-4">Recommended For You</h1>
            <div className="grid grid-cols-4 gap-4">
                {recommendedMovies.map((item, index) => {
                    return <Card key={index} movie={item} handleAddBookmarks={addBookmark} />
                })}
            </div>
        </div>
    )
}

export default Home
