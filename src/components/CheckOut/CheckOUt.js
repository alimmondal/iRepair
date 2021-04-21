import React from 'react';
import BookingForm from '../Dashboard/BookingForm/BookingForm';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import Navbar from '../Shared/Navbar/Navbar';


const containerStyle ={ 
    backgroundColor:'#F4FDFB',
    height:'100%',
}

const CheckOUt = () => {
    return (
        <div>
            <div className="">
            <Navbar></Navbar>
            <div style={containerStyle} className="container-fluid row">
                <div style={{display:'flex', justifyContent:'space-evenly'}} className="">
                    <div className="col-md-2">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-2">

                    </div>
                    <div className="col-md-8">
                        <BookingForm></BookingForm>
                    </div>
                </div>
            </div> 
        </div>
        </div>
    );
};

export default CheckOUt;