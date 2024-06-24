
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from '../nav/Nav.jsx';
import Home from '../pages/Home.jsx';
import Blog from '../pages/Blog.jsx';
import Post from '../pages/Post.jsx';
import Register from '../pages/Register.jsx';
import Login from '../pages/Login.jsx';
import {AuthProvider} from '../../contexts/AuthContext.jsx';
import PrivatePage from '../../middlewares/PrivatePage.jsx';


import './Main.css';

const Main = () => {
   
    return (
        <main className="background">
            <div className="container">
                <Nav />
                <AuthProvider>
             
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/blog" element={<PrivatePage><Blog /></PrivatePage>} />
                        <Route path="/post/:id" element={<PrivatePage><Post /></PrivatePage>} />
                        <Route path='/register' element={<Register/>}/>
                    </Routes>
                   
                </AuthProvider>
        
             
                
            </div>
            
        </main>
    );
};

export default Main;


