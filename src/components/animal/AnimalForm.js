import React, { useState, useEffect } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import EmployeeManager from '../../modules/EmployeeManager';
import LocationManager from "../../modules/LocationManager";
import './AnimalForm.css';


const AnimalForm = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "", picture: "", employeeId: 0, locationId: 0 });
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [locations, setLocations] = useState([]);
  const [chooseLocation, setChooseLocation] = useState(true);

  const handleFieldChange = evt => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };

  const handleLocationFieldChange = evt => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
    EmployeeManager.getByLocation(evt.target.value)
      .then(employees => {
          console.log(employees)
        setEmployees(employees);
        setChooseLocation(false);
       
      });
   
  };

/*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
  */

  const getEmployees = () => {
      EmployeeManager.getAll().then((response) => {
          setEmployees(response)
      })
  }

   useEffect(() => {
       getEmployees();
       LocationManager.getAll()
      .then(locations => {
        setLocations(locations);
        setIsLoading(false);
      })
    }, [])

  const constructNewAnimal = evt => {
    evt.preventDefault();
    if (animal.name === "" || animal.breed === "") {
      window.alert("Please input an animal name and breed");
    } else {
      setIsLoading(true);
      // Create the animal and redirect user to animal list
      AnimalManager.post(animal)
        .then(() => props.history.push("/animals"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
          <input
              type="text"
              required
              onChange={handleFieldChange}
              id="picture"
              placeholder="Animals Picture"
            />
            <label htmlFor="picture">Picture</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Animal name"
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="breed"
              placeholder="Breed"
            />
            <label htmlFor="breed">Breed</label>
          </div>
          <div>
          <label htmlFor="locationId">Location</label>
          <select
                className="form-control"
                id="locationId"
                value={parseInt(animal.locationId)}
                onChange={handleLocationFieldChange}
                >
            {locations.map(location =>
                    <option key={location.id} value={location.id}>
                    {location.place}
                    </option>
            )}
            
            </select>
            
            <label htmlFor="employee">Choose a caretaker:</label>
          <select
                className="form-control"
                id="employeeId"
                value={parseInt(animal.employeeId)}
                onChange={handleFieldChange}
                disabled={chooseLocation}
                >
                {employees.map(employee =>
                    <option key={employee.id} value={employee.id}>
                    {employee.name}
                    </option>
            )}
            </select>
            
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewAnimal}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default AnimalForm