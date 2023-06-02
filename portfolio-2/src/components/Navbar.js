import React, {useState} from 'react';
import {Link} from 'react-router-dom'

export default function Navbar() {
    return(
        <>
            <nav className="navbar">
                <div className='nabar-container'>
                    <Link to="/" className="navbar-logo">
                        MrG's Portfolio
                    </Link>

                </div>
            </nav>
        </>
    )
}

            
