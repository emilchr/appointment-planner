import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {

  let list = props.contacts || props.appointments;
  console.log(list)
  
  
  return (
    <div className="TileList">
      { 
        // Lists items from the states contats and appointmens on ContactsPage and AppointmentsPage
        list.map(( item, index ) => {
        let { name, ...description } = item; // assigns name, and rest of the values to description.
            console.log(item);

        return (
        <Tile key={ index } list={ item } description={ description } />
        )
        })

      }
    </div>
  );
};
