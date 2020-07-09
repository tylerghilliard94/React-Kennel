import React from "react";
import { Link } from "react-router-dom"

const LocationCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span className="card-locationName">{props.location.place}</span>
        </h3>
        <p>{props.location.address}</p>
        <button type="button" onClick={() => props.deletedLocation(props.location.id)}>Closed</button>
        <Link to={`/location/${props.location.id}`}>
        <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default LocationCard;