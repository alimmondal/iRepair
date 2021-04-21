import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const Services = () => {
    const [loggedInUser, setLoggedInUser, selectedDate,setSelectedDate] = useContext(UserContext);
    const [services, setService] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setService(data))
    }, [])

    return (
        <section style={{backgroundColor: '#F7F8F9', paddingBottom:'100px'}} className=" pt-5">
            <div className="text-center">
                <h5 className="text-danger">OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    services.map(service => <ServiceDetail date={selectedDate} service={service} key={service.name}></ServiceDetail>)
                }
            </div>
        </div>
            <div>
                <button style={{marginLeft:'620px', marginTop:'50px'}} className="btn-danger">Explore More</button>
            </div>
        </section>
    );
};

export default Services;

