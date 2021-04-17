import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../image/logo.png';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container ms-5">
            <Link className="logo" to='/'>
                <img src={logo} alt="" width="30" height="24" class="d-inline-block align-text-top" />
               <span className="logoText">iRepair</span> 
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <Link className="nav-link ms-5 text-white" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link ms-5 text-white" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link ms-5 text-white" to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link ms-5 text-white" to="/dashboard">Admin</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link ms-5 text-white" to="#">Blogs</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link ms-5 text-white" to="#">Contact Us</Link>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    );
};

export default Navbar;