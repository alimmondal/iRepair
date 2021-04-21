import React from 'react';
import ServiceShortList from '../ServiceShortList/ServiceShortList';


const AppointmentByDate = ({appointments}) => {
    console.log('appo', appointments)
    return (
        <section>
            <h2 className="text-brand text-center">Appointments</h2>
            {
                appointments.length ?
                 <ServiceShortList appointments={appointments} ></ServiceShortList>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Appointments for this Date</h4>
                </div>
            }
            
        </section>
    );
};

export default AppointmentByDate;