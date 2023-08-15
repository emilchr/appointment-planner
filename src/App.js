import  React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
const [ contacts, setContacts ] = useState([{name: "s", phone: "99999999", email: "s"}]);
const [ appointments, setAppointments ] = useState([]);

  /*
  Implement functions to add data to
  contacts and appointments
  */
 const addContact = (name, phone, email) => {

  const newContact = { // creates a new contact with destructured key-values
    name,
    phone,
    email
  }

  setContacts([...contacts, newContact]); // adds the newContact object to contacts state

 }

 const addAppointment = (name, contact, date, time) => {

  const newAppointment = { // creates a new appointment with destructured key-values
    name,
    contact,
    date,
    time
  }

  setAppointments([...appointments, newAppointment]); // adds the newAppointment object to contacts state

 }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ 
      <ContactsPage 
      contacts={ contacts } 
      addContact={ addContact }
      /> /* Add props to ContactsPage */ }/>

      <Route path={ROUTES.APPOINTMENTS} element={ 
      <AppointmentsPage 
      appointments={ appointments} 
      addAppointment={ addAppointment } 
      /> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
