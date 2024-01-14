import { useEffect, useState } from "react"
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import SearchBar from "./components/SearchBar"
import Trending from "./components/Trending"

import { Movie } from "../types/Movie"

function App() {
    const baseUrl = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_MOVIEDB_API_KEY}`,
        },
    }

    const [popularMovies, setPopularMovies] = useState<Movie[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(baseUrl, options)
                const data = await res.json()
                setPopularMovies(data.results)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

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
                    </Main>
                </div>
            </div>
        </>
    )
}

export default App
