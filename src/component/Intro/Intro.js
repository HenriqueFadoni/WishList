import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../sass/main.scss';

const Intro = props => {
    return (
        <div className="main-div ">
            <h2 className="sub-title">Welcome To</h2>
            <h1 className="title">WISHLIST</h1>
            <NavLink to="/Authentication">
                <button className="btn-sign-up">{props.isSignIn ? 'MAKE A WISH' : 'SIGN IN'}</button>
            </NavLink>
        </div>
    );
}

export default Intro;