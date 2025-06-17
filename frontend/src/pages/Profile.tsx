import { AppBar } from "../components/AppBar"
import { ProfileCard } from "../components/ProfileCard"

export const Profile = () => {
    return (
        <div>
            <div>
                <AppBar/>
            </div>
            <div>
                <ProfileCard/>
            </div>
        </div>
    )
}