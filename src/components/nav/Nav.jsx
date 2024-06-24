import './Nav.css'

import { Link, NavLink } from "react-router-dom"

const urlPages = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Blog',
        href: '/blog'
    },
    {
        label: 'Post',
        href: '/post'
    },
]

export default function(){
    return (
        <header>
            <nav className="navbar">
                <menu>
                    {urlPages.map( ({label, href}, i) => (
                        <li key={`urlPage${i}`}>
                            <NavLink to={href}>{label}</NavLink>
                        </li>
                    ))}
                </menu>
            </nav>
        </header>
    )
}