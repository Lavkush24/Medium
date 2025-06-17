import axios from 'axios';
import TextareaAutosize from 'react-textarea-autosize';
import { BACKEND_URL } from '../config';
import { useState, type ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

export const NewBlog = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    return (
        <div className="ms-90 me-30 flex flex-col mt-8">
            <div className="flex max-w-2xl">
                <span className="text-7xl font-extralight opacity-40">|</span>
                <span className="text-7xl content-center font-serif opacity-60">
                    <InputBox 
                        place="Title" 
                        onchange={(e) => {
                            setTitle(e.target.value)
                        }}
                    /> 
                </span>
            </div>
            <div className="ms-8 text-xl font-serif font-medium max opacity-40 ">
                <span>
                    <InputBox 
                        place="Tell your Story..."
                        onchange={(e) => {
                            setContent(e.target.value)
                        }}
                    />
                </span>
            </div>
            <div className='m-10 w-4xl flex flex-col  justify-endy-'>
                <button 
                    className="bg-black text-white rounded-xl p-2 text-sm font-semibold text-center"
                    onClick={async () => {
                        const responce = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                            title,
                            content
                        }, {
                            headers: {
                                Authorization: localStorage.getItem("token"),
                            }
                        });
                        navigate(`/blog/${responce.data.id}`)
                    }}
                >
                    Publish Blog
                </button>
            </div>
        </div>
    )
}


const InputBox = (
    {place,onchange}: 
    {
        place:string,
        onchange: (e:ChangeEvent<HTMLTextAreaElement>) => void
}) => {
    return(
        <div className="min-w-2xl">
            <TextareaAutosize 
                className="focus:outline-none block p-2.5 w-5xl overflow-hidden " placeholder={place}
                onChange={onchange}
            >
            </TextareaAutosize>
        </div>
    )
}