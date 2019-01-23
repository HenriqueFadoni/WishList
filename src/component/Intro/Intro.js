import React from 'react';
import { NavLink } from 'react-router-dom';

import './Intro.css';

const Intro = () => {
    return (
        <div className="main-div ">
            <div className="sub-title">
                <h2>Welcome To</h2>
            </div>
            <div className="title">
                <h1>WISHLIST</h1>
            </div>
            <div className="btn-sign-up">
                <NavLink to="/WishListRegister">
                    <button >SIGN UP</button>
                </NavLink>
            </div>
        </div>
    );
}

export default Intro;