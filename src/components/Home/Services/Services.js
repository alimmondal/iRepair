import React from 'react';
// import electronics from '../../../image/electronics.png;
import smartphone from '../../../image/smartphone.png';
import computer from '../../../image/computer.png';
import electronics from '../../../image/electronics.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Smartphone Repair',
        img: smartphone
    },
    {
        name: 'Computer Repair',
        img: computer
    },
    {
        name: 'Electronics Repair',
        img: electronics
    }
]

const Services = () => {
    return (
        <section style={{backgroundColor: '#F7F8F9', paddingBottom:'100px'}} className=" pt-5">
            <div className="text-center">
                <h5 className="text-danger">OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
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

