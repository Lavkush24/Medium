import { Link } from "react-router-dom"

export const MenuBar = () => {
    return(
        <div className="flex flex-col w-50 min-h-[200px] mr-3 m-1 shadow-2xl z-10">
            <div className="ps-10 pt-5 pb-1 border-b flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <Link to={"/profile"}>Profile</Link>
            </div>
            <div className="flex flex-col ps-15 pt-5 gap-4 font-semibold text-lg">
                <Link to={"/signin"}>SignIn</Link>
                <Link to={"/signup"}>SignUp</Link>
            </div>
        </div>
    )
}