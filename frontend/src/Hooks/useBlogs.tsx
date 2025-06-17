import { useEffect, useState } from "react"
import axios from "axios";
import { BACKEND_URL } from "../config";

export interface useBlogProps {
    id: string 
    title: string,
    content: string,
    date: string,
    author: {
        username: string
    }
};


export const useBlog = ({id}: { id: string }) => {
    const [load, setLoad] = useState(true);
    const [blog, setBlog] = useState<useBlogProps>()

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,
            {
                headers: {
                    Authorization: localStorage.getItem("token"),
                }
            }
        ).
        then((responce) => {
            if(responce) {
                setBlog(responce.data.blog);
                setLoad(false);
            }
        })
    },[id])
    
    
    return {
        blog,
        load
    }
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<useBlogProps[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,
            {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            }
        ).then((responce => {
            setBlogs(responce.data.blogs)
            setLoading(false)
        }))
    }, [])
    return {
        loading,
        blogs
    }
}