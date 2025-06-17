import { useState, type ChangeEvent } from "react"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"
import { type SignupInput } from "@lavkush25/medium-common"

export const Auth = ({type}: {type: "signup" | "signin"}) => {
    let navigate = useNavigate();
    let [postInputs, setPostInputs] = useState<SignupInput>(
        {
            username:"",
            email:"",
            password:"",
        })


    async function sendReq() {
        try {
            const responce = await axios.post(`${BACKEND_URL}/api/v1/user/${type=="signup"?"signup":"login"}`,postInputs);
            const jwt = responce.data.jwt;
            localStorage.setItem("token",jwt);
            navigate("/blogs");
        }
        catch (e) {
            Response.json({
                "message": e
            })
        }
        
    }
    
    return (
        <div className="h-9/10 flex flex-col justify-center gap-8">
            <div className="text-center">
                <div className="text-5xl font-extrabold pb-3">
                    {type=="signup"?"Create an Account": "Welocome Back!"}
                    
                </div>
                <div className="font-bold opacity-30 text-xl">
                    {type === "signup" ? "Already have an account?" : "Don't have an account? "} 
                    <Link 
                        to={type==="signup"?"signin":"signup"} 
                        text={type==="signup"?"Login":"SignUp"}
                    ></Link>
                </div>
            </div>
            <div className="flex justify-center mt-">
                
                <div className="flex flex-col gap-4">
                    {type === "signup" ?
                    <InputBox 
                        onchange={(e) => {
                            setPostInputs(postInputs => ({
                                ...postInputs,
                                username: e.target.value
                            }))}
                        }
                        message="Enter your username ?" 
                        id="username" 
                        type="text"
                    />
                    :""}
                    <InputBox 
                        onchange={(e) => {
                            setPostInputs(postInputs => ({
                                ...postInputs,
                                email: e.target.value
                            }))}
                        }
                        message="address@example.com" 
                        id="Email" 
                        type="email"
                    />
                    <InputBox 
                        onchange={(e) => {
                            setPostInputs(postInputs => ({
                                ...postInputs,
                                password: e.target.value
                            }))}
                        }
                        message="" 
                        id="Password" 
                        type="password"
                    />
                    <div className="flex flex-col gap-4">
                        <button 
                            onClick={sendReq}
                            className="
                            mt-2
                            bg-black text-white rounded-xl pl-4 pr-4 pt-2 pb-2
                            border-transparent
                            cursor-pointer
                            hover:border-black border-4
                        ">{type==="signup"?"SignUp":"Login"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


interface inputTypes {
    message: string,
    id: string,
    type: string,
    onchange: (e:ChangeEvent<HTMLInputElement>) => void
}


function InputBox({message, id,type,onchange}: inputTypes) {
    return (
        <div className="flex flex-col w-md h-[70px]">
            <label htmlFor={id} className="font-bold text-lg">{id}</label>
            <input 
                onChange={onchange}
                name={id} id={id} 
                type={type || "text"}
                className="rounded-xl 
                    border-2
                    hover:border-4 
                    hover:rounded-xl 
                    pl-4 pr-4 pt-2 pb-2" 
                placeholder={message}
                >
            </input>
        </div>
    )
}


function Link({to,text}: {to: string,text: string}) {
    return (
        <a className="ps-2 hover:underline" href={to}>{text}</a>
    )
}