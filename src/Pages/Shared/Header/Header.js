import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
    <div className='bg-base-300'>
        <div className="navbar container mx-auto">
        <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">Nature-Travel</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/news'>News</Link></li>
            <li><Link to='/destination'>Destination</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/register'>Register</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <button className="btn btn-warning"><Link to='/login'>Login</Link></button>
            </ul>
        </div>
        </div>
    </div>
    );
};

export default Header;