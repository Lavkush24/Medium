import { Avatar } from "./BlogCard"

export const BlogsSkeleton = () => {
    return (
        <div>
            <div className="grid grid-cols-3 gap-10">
                <div className="col-span-3 md:col-span-2 flex flex-col gap-4">
                    <div className="text-6xl font-extrabold "> 
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 min-w-[330px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 min-w-[330px] mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 min-w-[330px] mb-2.5"></div>
                    </div>
                    <div className="text-lg font-medium opacity-40">
                         <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    </div>
                    <div className="text-xl font-serif font-medium"> 
                        <SkeletonDiv/>
                        <SkeletonDiv/>
                        <br />
                        <SkeletonDiv/>
                        <br />
                        <SkeletonDiv/>
                    </div>
                </div>
                <div className="hidden md:col-span-1 md:flex md:flex-col md:gap-6">
                    <div className="font-semibold text-lg">
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-2.5"></div> 
                    </div>
                    <div className="flex gap-4">
                        <div className="content-center ">
                            <Avatar authorName="" w={30} h={30}></Avatar>
                        </div>
                        <div>
                            <div className="text-2xl font-bold">
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 min-w-[330px] mb-2.5"></div>
                            </div>
                            <div className="text-lg font-serif">                                
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 min-w-[330px] mb-2.5"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



const SkeletonDiv = () => {
    return (
        <div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-2xl mb-2.5"></div> 
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-3xl mb-2.5"></div> 
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-2xl mb-2.5"></div> 
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-3xl mb-2.5"></div> 
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-xl mb-2.5"></div>
        </div>
    )
}