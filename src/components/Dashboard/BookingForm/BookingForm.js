import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';

const BookingForm = () => {
    const [loggedInUser, setLoggedInUser, service, setService, selectedDate,setSelectedDate] = useContext(UserContext);
    const { register, handleSubmit, formState: { errors }} = useForm();
    
    // const name = service.map((pd) => pd.name);
    let name = '';
    for (let i = 0; i < service.length; i++) {
      name = service[i].name;
      
    }

    const onSubmit = data => {
        // console.log(data)
        data.service = name;
        // data.date = date;
        data.created = new Date();

        fetch('http://localhost:5000/addAppointments', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({data})
        })
        .then(res => res.json())
        .then(success => { 
            if(success){
                alert('appointment successful')
            }
        })

    }

    let total = '';
    for (let i = 0; i < service.length; i++) {
      const product = service[i];
      total = total + product.price;
    }

    return (
        <div>
            <div>
                <h2>Book</h2>
             </div>
        <div style={{border:'1px solid purple'}}>
                <form onSubmit={handleSubmit(onSubmit)} className="p-5" >
                    <input name="name" defaultValue="name" {...register("name")} className="form-control" />
                     <br/>
                    <input name="email" defaultValue="email" {...register("email")} className="form-control" />
                    <br/>
                    <input name="phone" defaultValue="phone" {...register("phone")} className="form-control" />
                    <br/>
                    <p>Your price will be : {total}</p>
                    <br/>
                    {/* <Link to="/bookingList"> */}
                        <button type="submit" className="btn-primary ms-5 px-5">Pay and see your Booking list</button>
                    {/* </Link> */}   
                </form>
        </div>
        </div>
    );
};


export default BookingForm;