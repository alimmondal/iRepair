import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import AppointmentByDate from "../AppointmentByDate/ServiceByDate";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const containerStyle = {
  backgroundColor: "#F4FDFB",
  height: "100%",
};

const ServiceList = () => {
  const [
    loggedInUser,
    setLoggedInUser,
    selectedDate,
    setSelectedDate,
  ] = useContext(UserContext);
  // const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointment] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    fetch("http://localhost:5000/appointmentsByDate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ date: selectedDate, email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, setSelectedDate);

  return (
    <div style={containerStyle} className="d-flex align-items-center">
      <div>
        <Calendar onChange={handleDateChange} value={new Date()} />
      </div>
      <div className="col-md-6">
        <AppointmentByDate appointments={appointments}></AppointmentByDate>
      </div>
    </div>
  );
};

export default ServiceList;
