import { FaSearch } from "react-icons/fa"
const SearchBar = () => {
    return (
        <div className="text-white flex items-center text-2xl py-5">
            <div className="pr-4">
                <FaSearch />
            </div>
            <div>
                <input
                    className="bg-transparent outline-none"
                    type="text"
                    placeholder="Search for movies"
                />
            </div>
        </div>
    )
}

export default SearchBar
