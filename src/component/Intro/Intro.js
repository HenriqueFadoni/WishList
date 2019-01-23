import React from 'react';
import { NavLink } from 'react-router-dom';

import './Intro.css';

const Intro = () => {
    return (
        <div className="MainDiv">
            <div className="SubTitle">
                <h2>Welcome To</h2>
            </div>
            <div className="Title">
                <h1>WISHLIST</h1>
            </div>
            <div className="BtnSignUp">
                <NavLink to="/WishListRegister">
                    <button >SIGN UP</button>
                </NavLink>
            </div>
        </div>
    );
}

export default Intro;