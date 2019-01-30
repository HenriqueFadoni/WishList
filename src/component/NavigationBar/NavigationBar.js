import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../sass/main.scss';

const NavigationBar = () => {
    return (
        <div className="nav-container">
            <NavLink to="/Logout">
                <button className="btn-nav btn-nav-1">LOGOUT</button>
            </NavLink>
            <NavLink to="/WishList">
                <button className="btn-nav btn-nav-2">WISH LIST</button>
            </NavLink>
        </div>
    );
}

export default NavigationBar;