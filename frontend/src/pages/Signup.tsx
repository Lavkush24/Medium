import { Quote } from "../components/Quote"
import { Auth } from "../components/Auth"

export function Signup() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
            <div className="flex items-center justify-center lg:items-end">
                <Auth type="signup"/>
            </div>
            <div className="hidden lg:block">
                <Quote/>
            </div>
        </div>
    )
}