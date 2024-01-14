import { useEffect, useState } from "react"
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import SearchBar from "./components/SearchBar"
import Trending from "./components/Trending"
import Card from "./components/Card"
import { Movie } from "../types/Movie"

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

function App() {
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

    return (
        <>
            <div className="flex">
                <div className="w-1/12">
                    <Navbar />
                </div>
                <div className="w-11/12">
                    <Main>
                        <SearchBar />
                        <Trending movies={popularMovies} />
                        <h1 className="text-white text-3xl mb-4">Recommended For You</h1>
                        <Card movies={recommendedMovies} />
                    </Main>
                </div>
            </div>
        </>
    )
}

export default App
