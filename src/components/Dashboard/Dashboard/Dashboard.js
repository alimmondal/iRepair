import React from 'react';
// import Footer from '../../Home/Footer/Footer';
// import Footer from '../../Home/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
// import Sidebar from '../Sidebar/Sidebar';
// import AddAdmin from '../../AddAdmin/AddAdmin';
import ServiceList from '../../ServiceList/ServiceList';
import Sidebar from '../Sidebar/Sidebar';



const Dashboard = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="container-fluid row ">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-1">
                    
                </div>
                <div className="col-md-9">
                    <ServiceList></ServiceList>
                </div>
            </div>       
        </div>
    );
};

export default Dashboard;