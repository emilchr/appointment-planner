import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {



  return (
    <>
    <form onSubmit={handleSubmit}>

    Name: <br />
    <label htmlFor="name">
    <input 
    name="name" 
    type="text" 
    value={ name }
    onChange={ (e) => setName(e.target.value) }
    />
    </label><br />

    {/* Contact: <br />
    <label htmlFor="contact">
    <input 
    name="contact" 
    type="text" 
    value={ contact }
    onChange={ (e) => ContactPicker(e.target.value) } // at contactpicker step 
    />
    </label><br /> */}

    Time: <br />
    <label htmlFor="time">
    <input 
    name="time" 
    type="text" 
    value={ time }
    onChange={ (e) => setTime(e.target.value) }
    />
    </label><br />
    
    Date: <br />
    <label htmlFor="date">
    <input 
    name="date" 
    type="date" 
    value={ date }
    onChange={ (e) => setDate(e.target.value) }
    min={getTodayString()}
    //placeholder="DD-MM-YYYY"
    //pattern="\d{2}-\d{2}-\d{4}"
    />
    </label><br />
    <ContactPicker contacts={ contacts } />
    <button type="submit">Submit</button>
    
    </form>
  </>
  );
};
