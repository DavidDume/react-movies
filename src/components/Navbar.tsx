import { FaUikit, FaBorderAll, FaFilm, FaTv, FaBookmark } from "react-icons/fa"
import { Link } from "react-router-dom"

const Navbar = () => {
    const navItems = [<FaBorderAll />, <FaFilm />, <FaTv />, <FaBookmark />]

    return (
        <div className="text-white m-10">
            <div className="flex flex-col items-center bg-[#171D2F] rounded-lg h-[90vh]">
                <div className="text-red-500 text-4xl my-4">
                    <Link to={"/"}>
                        <FaUikit />
                    </Link>
                </div>
                <ul className="text-xl">
                    {navItems.map((item, index) => (
                        <li
                            className="my-10 hover:cursor-pointer hover:text-white text-[#63688D]"
                            key={index}
                        >
                            <Link to={`bookmarks`}>{item}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Navbar
