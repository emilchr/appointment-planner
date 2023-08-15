import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
 const appointments = props.appointments;

 const [ currentName, setCurrentName ] = useState('');
 const [ contact, setContact ] = useState('');
 const [ date, setDate ] = useState('');
 const [ time, setTime ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   props.addAppointment(currentName, contact, date, time);
   setCurrentName('');
   setContact('');
   setDate('');
   setTime('');
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList appointments={ appointments } />
      </section>
    </div>
  );
};