import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import style from './Pages.module.css';
import { FaTrash, FaEdit } from 'react-icons/fa';


const apiUrl = import.meta.env.VITE_BASE_API_URL;

const Post = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const { data } = await axios.get(`${apiUrl}/posts/${slug}`);
                setPost(data);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };

        fetchPost();
    }, [slug]);

    if (!post) {
        return <div>Loading...</div>;
    }
    const handleDelete = async () => {
        try {
            await axios.delete(`${apiUrl}/posts/${slug}`);
            onDelete(slug);
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };

    return (
        <div className={style.postContainer}>
            <h1>{post.title}</h1>
            <img src={post.image} alt={post.title} className={style.postImage} />
            <p>{post.content}</p>
            <p><strong>Categoria:</strong> {post.Categories?.name}</p>
            <div>
                <strong>Tags:</strong>
                <ul>
                    {post.tags.map((tag) => (
                        <li key={tag.id}>{tag.name}</li>
                    ))}
                </ul>
            </div>
            <button className={style.edit}>
                <FaEdit />
            </button>
            <button className={style.trash} onClick={handleDelete}>
                <FaTrash />
            </button>
        </div>
    );
};

export default Post;
