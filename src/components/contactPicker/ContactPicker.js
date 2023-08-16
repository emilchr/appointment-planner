import React from "react";

export const ContactPicker = (props) => {

  console.log(props.contacts)
  console.log(props.contacts[0].name)
  return (
    <>
      <select>
        <option value="">No contact selected</option>
        { Object.values(props.contacts).map((item, index) => { 
          let {name} = item;
          
          return (
            <option key={ index } value={ name }> { name } </option>
          )

          }) }
      </select>
    </>
  );
};
