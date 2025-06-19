import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"
import { CreateButton } from "./CreateButton"
import { MenuBar } from "./MenuBar"
import { useState } from "react"

export const AppBar = () => {
    const [show, setShow] = useState(false);

    return (
        <div className="relative flex flex-col">
            <div className="w-full flex justify-between border-b px-10 py-4">
                <div className="content-center font-bold text-xl">
                    <Link to={"/blogs"}>Medium</Link>
                </div>
                <div className="flex gap-4">
                    <div>
                        {}
                        <CreateButton text="New Blog" to="/new"></CreateButton>
                    </div>
                    <div 
                        onClick={() => { setShow(prev => !prev)}}
                        className="content-center cursor-pointer">
                        <Avatar authorName="Lavkush" w={34} h={34}/>
                    </div>
                </div>
            </div>
            {
                show && (
                    <div className="absolute w-full flex justify-end overflow-hidden top-16">
                        <MenuBar/>
                    </div>
                )
            }
        </div>
    )
}