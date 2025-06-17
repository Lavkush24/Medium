import { DateTimeFormat } from "../Hooks/DateTimeFormat"
import { Avatar } from "./BlogCard"

export interface ExpandProps {
    id: string,
    title: string,
    content: string,
    author: string,
    date: string,
}

export const ExpandBlogCard = ({title, content,author,date}: ExpandProps) => {
    const formatedDate = DateTimeFormat({date});

    return (
        <div className="grid grid-cols-3 gap-10">
            <div className="col-span-3 md:col-span-2 flex flex-col gap-4">
                <div className="text-6xl font-extrabold "> {title} </div>
                <div className="text-lg font-medium opacity-40"> Posted on {formatedDate}</div>
                <div className="text-xl font-serif font-medium"> {content} </div>
            </div>
            <div className="hidden md:col-span-1 md:flex md:flex-col md:gap-6">
                <div className="font-semibold text-lg">Author</div>
                <div className="flex gap-4">
                    <div className="content-center ">
                        <Avatar authorName={author} w={30} h={30}></Avatar>
                    </div>
                    <div>
                        <div className="text-2xl font-bold">{author}</div>
                        <div className="text-lg font-serif">Hello this is lavkush the author of this blog</div>
                    </div>
                </div>
            </div>
        </div>
    )
}