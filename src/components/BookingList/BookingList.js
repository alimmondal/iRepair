import React, { useContext } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import Navbar from '../Shared/Navbar/Navbar';
import { UserContext } from '../../App';

const BookingList = () => {
const [loggedInUser, setLoggedInUser, service, setService, selectedDate,setSelectedDate] = useContext(UserContext);
    return (
        <section>
            <Navbar></Navbar>
            <div style={{display:'flex', justifyContent:'space-evenly'}} className="container row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                    <div className="col-md-2"></div>
                <div className="col-md-8">
                    <h3>Booking List:</h3>
                    <p>Name: {loggedInUser.name}</p>
                    {
                        service.map((pd) => <li>Name: {pd.name} --- Price: ${pd.price} -- Date: --</li>)
                    }
                </div>
            </div>
        </section>
    );
};

export default BookingList;