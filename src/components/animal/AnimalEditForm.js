import React, { useState, useEffect } from "react"
import AnimalManager from "../../modules/AnimalManager"
import EmployeeManager from "../../modules/EmployeeManager"
import LocationManager from "../../modules/LocationManager"
import "./AnimalForm.css"

const AnimalEditForm = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "", picture: "", employeeId: 0, locationId: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [chooseLocation, setChooseLocation] = useState(true);
  const [employees, setEmployees] = useState([]);
  const [locations, setLocations] = useState([]);


  const handleLocationFieldChange = evt => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
    EmployeeManager.getByLocation(animal.locationId)
      .then(employees => {
        setEmployees(employees);
        setChooseLocation(false);
      });
   
  };
  const handleFieldChange = evt => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };

  const updateExistingAnimal = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedAnimal = {
      id: props.match.params.animalId,
      name: animal.name,
      breed: animal.breed,
      picture: animal.picture,
      employeeId: parseInt(animal.employeeId),
      locationId: parseInt(animal.locationId)
    };

    AnimalManager.update(editedAnimal)
      .then(() => props.history.push("/animals"))
  }

  useEffect(() => {
    AnimalManager.get(props.match.params.animalId)
      .then(animal => {
        setAnimal(animal);
        setIsLoading(false);
      });
      EmployeeManager.getAll()
      .then(employees => {
        setEmployees(employees);
        setIsLoading(false);
      });
      LocationManager.getAll()
      .then(locations => {
        setLocations(locations);
        setIsLoading(false);
      })
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={animal.name}
            />
            <label htmlFor="name">Animal name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="breed"
              value={animal.breed}
            />
            <label htmlFor="breed">Breed</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="breed"
              value={animal.picture}
            />
            <label htmlFor="picture">Picture</label>
            <select
                className="form-control"
                id="locationId"
                value={animal.locationId}
                onChange={handleLocationFieldChange}
                >
            {locations.map(location =>
                    <option key={location.id} value={location.id}>
                    {location.place}
                    </option>
            )}
            
            </select>
            <label htmlFor="locationId">Location</label>
            <select
                className="form-control"
                id="employeeId"
                value={animal.employeeId}
                onChange={handleFieldChange}
                disabled={chooseLocation}
                >
                {employees.map(employee =>
                    <option key={employee.id} value={employee.id}>
                    {employee.name}
                    </option>
            )}
            </select>
            <label htmlFor="employeeId">Employee</label>
            
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingAnimal}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default AnimalEditForm