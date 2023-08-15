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
    
    // checks to se if there are duplicate name when submitting a new contact.
    const isNameDuplicate = contacts.some(contact => contact.name === currentName);
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

   } else if (currentName === "" || currentName === " ") {  // Does not add contact if value is nothing or with a space
      alert('Please fill in a value.')
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
        <ContactForm 
        handleSubmit={ handleSubmit } 
        currentName={ currentName }
        setCurrentName={ setCurrentName }
        currentPhone={ currentPhone }
        setCurrentPhone={ setCurrentPhone }
        currentEmail={ currentEmail }
        setCurrentEmail={ setCurrentEmail }
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList list={ contacts } />
      </section>
    </div>
  );
};
