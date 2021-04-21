import React from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import ServiceList from '../ServiceList/ServiceList';
import Navbar from '../Shared/Navbar/Navbar';

const OrderList = () => {
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

export default OrderList;