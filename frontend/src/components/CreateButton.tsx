import { Link } from "react-router-dom"

export const CreateButton = ({text,to}: {text:string,to:string}) => {
    return (
        <Link to={to}>
            <div
                className="bg-black text-white rounded-xl p-2 text-sm font-semibold text-center">
                {text}
            </div>
        </Link>
    )
}