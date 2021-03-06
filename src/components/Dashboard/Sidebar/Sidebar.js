import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://morning-island-75682.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data))
    },[])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                    <li>
                        <Link to="/dashboard" className="text-white">
                            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                    </li>
                    <li>
                        <Link to="/prescriptions" className="text-white">
                            <FontAwesomeIcon icon={faFileAlt} /> <span>Manage Services</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Book" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Book</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/bookingList" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Booking List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addReview" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Review</span>
                        </Link>
                    </li>
              {isAdmin && <div>
                    <li>
                        <Link to="/AdminPage" className="text-white">
                            <FontAwesomeIcon icon={faCalendar} /> <span>Add Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/OrderList" className="text-white">
                            <FontAwesomeIcon icon={faUsers} /> <span>Order List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/AddServices" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Services</span>
                        </Link>
                    </li>
               </div>}
               <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
            </ul>
            
        </div>
    );
};

export default Sidebar;