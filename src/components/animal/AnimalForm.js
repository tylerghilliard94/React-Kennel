import React, { useState, useEffect } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import EmployeeManager from '../../modules/EmployeeManager';
import './AnimalForm.css'
import EmployeeDropdown from "../Employee/EmployeeDropdown"

const AnimalForm = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "" });
//   const [employee, setEmployee] = useState({ name: "", job: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
  */

//   const getEmployees = () => {
//       EmployeeManager.getAll().then((response) => {
//           setEmployee(response)
//       })
//   }

//    useEffect(() => {
//        getEmployees();
//     }, [])

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
          {/* <div>
          <label htmlFor="employee">Choose a caretaker:</label>
          <select
              type="dropdown"
              required
              onChange={handleFieldChange}
              id="employee"
              placeholder="Choose an Employee"
            >
                <option value="">Choose a caretaker</option>
                {employee.forEach(caretaker => 
                    <option value={caretaker.name}>{caretaker.name}</option>
                )}
            </select>
            
          </div> */}
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