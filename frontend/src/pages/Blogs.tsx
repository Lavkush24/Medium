import { BlogCard } from "../components/BlogCard"
import { AppBar } from "../components/AppBar"
import { useBlogs } from "..//Hooks/useBlogs"



export function Blogs() {
    const { loading } = useBlogs()

    return (
        <div className="">
            <AppBar/>
            {loading? <Skeleton/> : <BlogsLoaded/>}
        </div>
    )
}


const Skeleton = ()=> {
    return (
        <div className="flex flex-col gap-10 items-center mt-8"> 
                <SkeletonAnimation/>
                <SkeletonAnimation/>
                <SkeletonAnimation/>
                <SkeletonAnimation/>
                <SkeletonAnimation/>
                <SkeletonAnimation/>
                <SkeletonAnimation/>
        </div>
    )
}

export const SkeletonAnimation = ()=> {
    return (
            <div className="flex flex-col gap-10 items-center mt-8">
                <div role="status" className="min-w-2xl animate-pulse">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 min-w-xl mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 min-w-[330px] mb-2.5"></div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4 mt-8"></div>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
}

const BlogsLoaded = () => {
    const { blogs } = useBlogs()
    return (
         <div className="flex flex-col gap-10 items-center mt-8">
                {blogs.map(b => 
                    <BlogCard 
                        id={b.id}
                        title={b.title}
                        content={b.content}
                        authorName={b.author.username}
                        date={b.date}
                    ></BlogCard>
                )}
        </div>
    )
}