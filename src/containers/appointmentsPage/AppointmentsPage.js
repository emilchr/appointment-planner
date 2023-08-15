import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
 const appointments = props.appointments;

 const [ name, setName ] = useState('');
 const [ contact, setContact ] = useState('');
 const [ date, setDate ] = useState('');
 const [ time, setTime ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   if (name === ' ' || name === '') {
    alert('Please fill in a value.');
   } else {
      props.addAppointment(name, contact, date, time);
      setName('');
      setContact('');
      setDate('');
      setTime('');
   }
   
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
        handleSubmit={ handleSubmit }
        name={ name }
        setName={ setName }
        contact={ contact }
        setContact={ setContact }
        date={ date }
        setDate={ setDate }
        time={ time }
        setTime={ setTime }
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList appointments={ appointments } />
      </section>
    </div>
  );
};