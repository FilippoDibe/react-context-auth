import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../cards/Card';
import './Pages.module.css';
import style from './Pages.module.css';

const apiUrl = import.meta.env.VITE_BASE_API_URL;

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data } = await axios.get(`${apiUrl}/posts`);
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    const handleDelete = (slug) => {
        setPosts((prevPosts) => prevPosts.filter(post => post.slug !== slug));
    };

    return (
        <div className={style.blogContainer}>
            <h1>Blog</h1>
            <div className={style.cardContainer}>
                {posts.map((post) => (
                    <Card key={post.id} post={post} onDelete={handleDelete} />
                ))}
            </div>
        </div>
    );
};

export default Blog;
