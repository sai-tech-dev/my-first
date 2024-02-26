import { IoLogOutOutline } from "react-icons/io5";
import Tooltip from "../helper/Tooltip";

export default function Header() {
    return <header className=" flex flex-row bg-skycolor">
        <div className=" w-1/2">
            <nav>
                <ul className=" flex flex-row gap-2 py-2 pl-[35%] h-[45px]">
                    <li>Dashboard</li>
                    <li>List Customer</li>
                    {/* <li></li> */}
                </ul>
            </nav>
        </div>
        <div className=" w-1/2 h-[55px]">
            <nav className="pl-[35%]">
                <ul className=" flex flex-row gap-2 py-2">
                    <li className="btn">Dashboard</li>
                    <li className="btn">List Customer</li>
                    <li>
                        <Tooltip text="Logout">
                            <button >
                                <IoLogOutOutline className=" size-8 pt-2" />
                                <span className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2 py-1 bg-gray-800 text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none">
                                        Logout
                                </span>
                            </button>
                        </Tooltip>
                    </li>
                </ul>
            </nav>
            
        </div>
    </header>
}