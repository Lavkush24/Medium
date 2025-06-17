import { Link } from "react-router-dom"
import { DateTimeFormat } from "../Hooks/DateTimeFormat"

interface BlogCardProps {
    id: string
    authorName: string,
    title: string,
    content: string,
    date: string,
};

export const BlogCard = ({authorName,title,content,date,id}: BlogCardProps) => {
    const formatedDate = DateTimeFormat({date});
    return ( 
        <Link to={`/blog/${id}`}>
        <div 
            className="max-w-xs sm:max-w-2xl cursor-pointer p-4 ps-6 pe-6 hover:shadow-2xl hover:rounded-2xl hover:border-2">
            <div className="flex gap-1.5">
                <Avatar authorName={authorName} w={24} h={24}/>
                <span className="opacity-60 font-semibold">{authorName}</span>
                <span className="flex items-center opacity-60">{<Circle/>}</span>
                <span className="opacity-40 font-semibold">{formatedDate}</span>
            </div>
            <div className="font-extrabold text-xl mt-1 mb-0.5">
                {title}
            </div>
            <div className="font-serif text-lg mt-1 mb-0.5">
                {content.slice(0,100) + "..."}
            </div>
            <div className="mt-5 opacity-40 font-semibold text-sm">
                {Math.ceil(content.length / 100) + " minutes(s) read"} 
            </div>
        </div>
        </Link>
    )
}


function Circle() {
    return (
        <div className="h-1 w-1 rounded-full bg-black">

        </div>
    )
}


export const Avatar = (
    {authorName,w,h}:{authorName: string,w:number,h:number}   
) => {
    return (
        <div 
            style={{ width: `${w}px`, height: `${h}px`, backgroundColor:"black"}}
            className={`relative inline-flex items-center text-center justify-center overflow-hidden rounded-full`}>
            <span className="font-medium text-gray-600 dark:text-gray-300">{authorName[0]}</span>
        </div>
    )
}