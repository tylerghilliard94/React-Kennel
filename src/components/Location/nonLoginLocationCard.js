import React from "react";
import { Link } from "react-router-dom"

const NonLoginLocationCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span className="card-locationName">{props.locations.place}</span>
        </h3>
        <p>{props.locations.address}</p>
        
       
      </div>
    </div>
  );
};

export default NonLoginLocationCard;