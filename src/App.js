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
const [ contacts, setContacts ] = useState([
  {name: "Test Testison", phone: "99999999", email: "test@test.no"}, 
  {name: "Emil Westrum", phone: "90233354", email: "emil_ow@hotmail.com"}
]);

const [ appointments, setAppointments ] = useState([
  {name: "Test Testison", contact: "Random mcRandom", date: "10/01/10", time: "12:00"},
  {name: "Emil Westrum", contact: "Test Testison", date: "20/12/23", time: "13:00"},
]);

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
      appointments={ appointments }
      contacts={ contacts } 
      addAppointment={ addAppointment } 
      /> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
