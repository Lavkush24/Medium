import { AppBar } from "../components/AppBar"
import { NewBlog } from "../components/NewBlog"

export const CreateBlog = () => {
    return (
        <div>
            <div>
                <AppBar/>
            </div>
            <div>
                <NewBlog/>
            </div>
        </div>
    )
}