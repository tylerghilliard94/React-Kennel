import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager';
import EmployeeManager from '../../modules/EmployeeManager';
import EmployeeCard from "../Employee/EmployeeCard"
import './LocationDetails.css'

const LocationDetail = props => {
  const [location, setLocation] = useState({ place: "", address: "" });
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  useEffect(() => {
    //get(id) from LocationManager and hang on to the data; put it into state
    LocationManager.getWithEmployees(props.match.params.locationId)
      .then(location => {
        setLocation({
          place: location.place,
          address: location.address
        });
        setEmployees(location.employees)
        setIsLoading(false);
      });
  }, [props.locationId]);

  const handleDelete = () => {
    setIsLoading(true);
    LocationManager.delete(props.locationId).then(() => 
    props.history.push("/location")
    );
  };
  const handleEmployeeDelete = (id) => {
    setIsLoading(true);
    EmployeeManager.delete(id).then(() => 
    props.history.push("/location")
    );
  };

  return (
    <div className="card">
      <div className="card-content">
        <h3>Place: <span style={{ color: 'darkslategrey' }}>{location.place}</span></h3>
        <p>{location.address}</p>
        
        <button type="button" disabled={isLoading} onClick={handleDelete}>Close</button>
        <button type="button"
          onClick={() => props.history.push(`/location/${props.match.params.locationId}/edit`)}>
          Edit
        </button>
        <h2>Employees:</h2>
        {employees.map(employee =>
        <EmployeeCard
          key={employee.id}
          employee={employee}
          deleteEmployee={handleEmployeeDelete}
          {...props}
        />
      )}
      </div>
    </div>
  );
}

export default LocationDetail;