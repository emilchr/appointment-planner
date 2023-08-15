import React from "react";

export const Tile = (props) => {
  return (
    <div className="tile-container">
      {props.list.name}<br />
      {props.list.phone}<br />
      {props.list.email}<br />
    </div>
  );
};
