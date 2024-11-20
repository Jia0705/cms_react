import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import PostAdd from "./pages/PostAdd";
import PostEdit from "./pages/PostEdit";
import PostManage from "./pages/PostManage";
import Signup from "./pages/Signup";
import SinglePost from "./pages/SinglePost";
import UserAdd from "./pages/UserAdd";
import UserChangePassword from "./pages/UserChangePassword";
import UserEdit from "./pages/UserEdit";
import UserManage from "./pages/UserManage";  


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/postadd" element={<PostAdd />} />
        <Route path="/postedit" element={<PostEdit />} />
        <Route path="/postmanage" element={<PostManage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/singlepost" element={<SinglePost />} />
        <Route path="/useradd" element={<UserAdd />} />
        <Route path="/userchangepassword" element={<UserChangePassword />} />
        <Route path="/useredit" element={<UserEdit />} />
        <Route path="/usermanage" element={<UserManage />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;