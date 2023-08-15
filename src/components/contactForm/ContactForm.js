import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
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
        onChange={ (e) => setName(e.target.value)}
        />
      </label><br />

      Phone: <br />
      <label htmlFor="phone">
        <input 
        name="phone" 
        type="text" 
        value={ phone }
        />
      </label><br />

      E-mail: <br />
      <label htmlFor="email">
        <input 
        name="email" 
        type="text" 
        value={ email }
        />
      </label><br />

      <button>Submit</button>
    </form>
    </>
  );
};

