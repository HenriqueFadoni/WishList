import React from 'react';
import { NavLink } from 'react-router-dom';

const Intro = () => {
    return (
        <div>
            <div>
                <h2>Welcome To</h2>
            </div>
            <div>
                <h3>WISHLIST</h3>
            </div>
            <NavLink to="/WishListRegister">
                <button >SIGN IN/OUT</button>
            </NavLink>
        </div>
    );
}

export default Intro;