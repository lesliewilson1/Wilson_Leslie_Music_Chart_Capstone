import React from 'react'
import './Nav.css'

function Nav() {
    return (
        <header className="header">
            <a href="/" className="logo">Logo</a>
            <nav className="nav">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Form</a>
                <a href="/">Tracks</a>
                
            </nav>
        </header>
    )
}

export default Nav