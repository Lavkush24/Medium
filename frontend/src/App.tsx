import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Signin } from "./pages/Signin"
import { Signup } from "./pages/Signup"
import { Blog } from "./pages/Blog"
import { Blogs } from "./pages/Blogs"
import { CreateBlog } from "./pages/CreateBlog"
import { Profile } from "./pages/Profile"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>} ></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path="/blog/:id" element={<Blog/>}></Route>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/new" element={<CreateBlog/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
