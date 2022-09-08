import React from 'react';
import {BrowserRouter ,Routes, Route, Link} from "react-router-dom";
import Landing from "./Landing/Landing";
import Admin from "./Admin/Admin";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";

const App = () => {
    return (
        <div>
            <BrowserRouter>
            <div>
                <Link to="landing">Home</Link>
                <Link to="login">Login</Link>
                <Link to="signup">Signup</Link>
                <Link to="admin">Admin</Link>
            </div>
            <Routes>
                <Route exact path="/landing" element={<Landing />}/>
                <Route path="/admin" element={<Admin />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<Signup />}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
