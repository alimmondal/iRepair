import React from 'react';
import AddAdmin from '../AddAdmin/AddAdmin';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import Navbar from '../Shared/Navbar/Navbar';
// import Footer from '../../Home/Footer/Footer';
// import Footer from '../../Home/Footer/Footer';
// import Navbar from '../../Shared/Navbar/Navbar';
// import Sidebar from '../Sidebar/Sidebar';
// import AddAdmin from '../../AddAdmin/AddAdmin';


const containerStyle ={ 
    backgroundColor:'#F4FDFB',
    height:'100%',
}
const AdminPage = () => {
    return (
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
                    <AddAdmin></AddAdmin>
                   
                    </div>
                </div>
            </div> 
               
        </div>
    );
};

export default AdminPage;