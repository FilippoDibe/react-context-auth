import React from 'react';
import cardStyle from "./Card.module.css";
import { FaTrash, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';

const apiUrl = import.meta.env.VITE_BASE_API_URL;

const CardText = ({ title, content, slug, onDelete }) => {
    const handleDelete = async () => {
        try {
            await axios.delete(`${apiUrl}/posts/${slug}`);
            onDelete(slug);
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };

    return (
        <div>
            <h4 className={cardStyle.title}><strong>{title}</strong></h4>
            <p className={cardStyle.text}>{content}</p>
            <Link to={`/post/${slug}`} className={cardStyle.button}>Leggi di più</Link>
            <button className={cardStyle.edit}>
                <FaEdit />
            </button>
            <button className={cardStyle.trash} onClick={handleDelete}>
                <FaTrash />
            </button>
        </div>
    );
}

export default CardText;
