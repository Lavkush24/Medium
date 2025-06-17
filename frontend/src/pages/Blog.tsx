import { ExpandBlog } from "../components/ExpandBlog";
import { AppBar } from "../components/AppBar";

export function Blog() {
    return (
        <div>
            <div>
                <AppBar/>
            </div>
            <div className="ms-30 me-20 mt-20">
                <ExpandBlog/>
            </div>
        </div>
    )
}