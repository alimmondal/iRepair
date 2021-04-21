import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';

const ServiceDetail = ({service, date}) => {
    console.log('props', service);
    const [loggedInUser, setLoggedInUser, cart, setCart, selectedDate,setSelectedDate] = useContext(UserContext);
    
    const history = useHistory();
    const handleBook = (service, _id) => {
        history.push(`/CheckOUt/${_id}`);

        console.log("product added", service);
        const newCart = [...cart, service];
        setCart(newCart);
        // console.log(newCart)
    }

    return (
        <div className="col-md-4 text-center pb-5">
            <img style={{height: '80px'}} src={service.imageURL} alt="" />
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <p>${service.price}</p>
            <p className="text-secondary">{service.description}</p>
            <button onClick={() => handleBook( service, service._id)} 
            className="btn-primary">Book Appointment</button>
        </div>
    );
};

export default ServiceDetail;