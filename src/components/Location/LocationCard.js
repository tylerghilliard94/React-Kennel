import React from "react";
import { Link } from "react-router-dom"

const LocationCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span className="card-locationName">{props.locations.place}</span>
        </h3>
        <p>{props.locations.address}</p>
        <button type="button" onClick={() => props.deletedLocation(props.locations.id)}>Closed</button>
        <Link to={`/location/${props.locations.id}`} {...props}>
        <button>Details</button>
        </Link>
        
        <button type="button"
          onClick={() => props.history.push(`/location/${props.locations.id}/edit`)} >
          Edit
        </button>
       
      </div>
    </div>
  );
};

export default LocationCard;