import React, { useState, useEffect } from 'react'
import AnimalManager from '../../modules/AnimalManager'
import EmployeeManager from '../../modules/EmployeeManager'
import AnimalCard from '../animal/AnimalCard'

const EmployeeWithAnimals = props => {
  const [employee, setEmployee] = useState({});
  const [animals, setAnimals] = useState([]);
  const deleteAnimal = id => {
    AnimalManager.delete(id)
      .then(() => AnimalManager.getAll().then(setAnimals));
  };
  useEffect(() => {
    //got here now make call to get employee with animal
    EmployeeManager.getWithAnimals(props.match.params.EmployeeId)
      .then(APIResult => {
        setEmployee(APIResult);
        setAnimals(APIResult.animals);
      });
  }, []);

  return (
    <div className="card">
      <p>Employee: {employee.name}</p>
      <p>Job: {employee.job}</p>
      {animals.map(animal =>
        <AnimalCard
          key={animal.id}
          animal={animal}
          deletedAnimal={deleteAnimal}
          {...props}
        />
      )}
    </div>
  );
};

export default EmployeeWithAnimals;