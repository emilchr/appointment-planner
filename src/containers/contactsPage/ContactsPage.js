import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const [currentName, setCurrentName] = useState('');
 const [currentPhone, setCurrentPhone] = useState('');
 const [currentEmail, setCurrentEmail] = useState('');
 const [isDuplicate, setIsDuplicate] = useState(false);

  const contacts = props.contacts;

  useEffect(() => {
    
    const isNameDuplicate = contacts.some(contact => contacts.name === currentName);
    setIsDuplicate(isNameDuplicate);

  },[currentName, contacts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */

   if(!isDuplicate){

      props.addContact(currentName, currentPhone, currentEmail);

      setCurrentName('');
      setCurrentPhone('');
      setCurrentEmail('');

   } else {

      alert('The contact already exists.');

      setCurrentName('');
      setCurrentPhone('');
      setCurrentEmail('');
   };
  };
   

  
  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList />
      </section>
    </div>
  );
};
