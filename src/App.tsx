import { Outlet } from "react-router-dom"
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import SearchBar from "./components/SearchBar"

function App() {
    return (
        <>
            <div className="flex">
                <div className="w-1/12">
                    <Navbar />
                </div>
                <div className="w-11/12">
                    <Main>
                        <SearchBar />
                        <Outlet />
                    </Main>
                </div>
            </div>
        </>
    )
}

export default App
