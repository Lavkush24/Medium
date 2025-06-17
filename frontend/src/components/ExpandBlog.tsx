import { useParams } from "react-router-dom"
import { useBlog } from "../Hooks/useBlogs"
import { ExpandBlogCard } from "./ExpandBlogCard";
import { type ExpandProps } from "./ExpandBlogCard";
import { BlogsSkeleton } from "./BlogsSkeleton";



export const ExpandBlog = () => {
    const { id } = useParams<{id: string}>();

    if (!id) {
        return <div>Invalid or missing blog ID</div>;
    }

    const { load, blog } = useBlog({id});

    return (
        <div>
            {load ?  
                <BlogsSkeleton/>
                : 
                <Blog 
                    id={blog?.id || ""}
                    title={blog?.title || ""}
                    content={blog?.content || ""}
                    author={blog?.author.username || ""}
                    date={blog?.date || "24 August 2025" }
            />}
        </div>
    )
}


const Blog = ({id,title,content,date,author}: ExpandProps) => {
    return (
             <div className="flex flex-col gap-10 items-center mt-8">
                <ExpandBlogCard 
                    id={id}
                    title={title}
                    content={content}
                    date={date}
                    author={author}
                />
            </div>
        )
}