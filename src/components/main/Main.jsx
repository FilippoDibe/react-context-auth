
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from '../nav/Nav.jsx';
import Home from '../pages/Home.jsx';
import Blog from '../pages/Blog.jsx';
import Post from '../pages/Post.jsx';

import './Main.css';

const Main = () => {
   
    return (
        <main className="background">
            <div className="container">
                <Nav />

           
                    <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/post/:slug" element={<Post />} />
                    </Routes>
             
                
            </div>
            
        </main>
    );
};

export default Main;


