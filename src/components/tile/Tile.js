import React from "react";

export const Tile = (props) => {

  // Capitalizes first character in the string.
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="tile-container">
      <p className="tile-title">{ props.list.name }</p>
      <div className="tile"> {
        // gets all the entries in description, maps them according to key, value and gives them a index as key in the rendering.
        Object.entries(props.description).map(([key, value], index) => (
        <p key={index}>  { capitalize(key) + ": " + value } </p>
        ))
      }<hr />
      </div>
    </div>
  );
};
