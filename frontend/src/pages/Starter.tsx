import { AppBar } from "../components/AppBar"
import { CreateButton } from "../components/CreateButton"

export const Starter = () => {
    return(
        <div className="min-h-40">
            <AppBar/>
            <CreateButton text="Welcome to The MEDIUM" to="/blogs"></CreateButton>
        </div>
    )
}