import React, { useEffect, useState } from 'react';
import "./Animal.css";
import { Link } from "react-router-dom";
import EmployeeManager from "../../modules/EmployeeManager.js"
import LocationManager from "../../modules/LocationManager.js"

const AnimalCard = props => {
  const [employee, setEmployee] = useState({});
  const [location, setLocation] = useState({});
  useEffect(() => {
    EmployeeManager.get(props.animal.employeeId)
    .then((response) => {
      setEmployee(response)
    })
    LocationManager.get(props.animal.locationId)
    .then((response) => {
      setLocation(response)
    })
  }, [])
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={props.animal.picture} alt="My Dog" />
        </picture>
        <h3>Name: <span className="card-petname">
          {props.animal.name}
        </span></h3>
        <p>Breed: {props.animal.breed}</p>
        <p>Location: {location.place}</p>
        <p>Assigned Employee: {employee.name}</p>
        
        <Link to={`/animals`} {...props} >
        <button type="button" onClick={() => props.deletedAnimal(props.animal.id)}>Discharge</button>
        </Link>
        <Link to={`/animals/${props.animal.id}`} animal={props.animal} {...props} >
        <button>Details</button>
        </Link>
        
        <button type="button"
        onClick={() => props.history.push(`/animals/${props.animal.id}/edit`)}>
        Edit
      </button>
      
      </div>
    </div>
  );
}

export default AnimalCard