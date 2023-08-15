import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  return (
    <div className="TileList">
      { props.list.map(( name, index ) =>
        <Tile key={ index } list={ name } />
        ) 
      }
    </div>
  );
};
