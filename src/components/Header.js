import { IoLogOutOutline } from "react-icons/io5";

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
                    {/* <li></li> */}
                </ul>
            </nav>
            <button className=""><IoLogOutOutline /></button>
        </div>
    </header>
}