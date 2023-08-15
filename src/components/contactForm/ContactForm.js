import React from "react";

export const ContactForm = ({
  currentName,
  setCurrentName,
  currentPhone,
  setCurrentPhone,
  currentEmail,
  setCurrentEmail,
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
        value={ currentName }
        onChange={ (e) => setCurrentName(e.target.value) }
        />
      </label><br />

      Phone: <br />
      <label htmlFor="phone">
        <input 
        name="phone" 
        type="text"
        pattern="(0047|\+47|47)?[2-9]\d{7}" 
        value={ currentPhone }
        onChange={ (e) => setCurrentPhone(e.target.value) }
        />
      </label><br />

      E-mail: <br />
      <label htmlFor="email">
        <input 
        name="email" 
        type="text" 
        value={ currentEmail }
        onChange={ (e) => setCurrentEmail(e.target.value) }
        />
      </label><br />

      <button type="submit">Submit</button>
    </form>
    </>
  );
};

