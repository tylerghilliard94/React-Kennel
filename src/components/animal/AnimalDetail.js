import React, { useState, useEffect } from "react";
import AnimalManager from "../../modules/AnimalManager";
import "./AnimalDetail.css";
import {firstLetterCase} from '../../modules/helper'

const AnimalDetail = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "", image: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    AnimalManager.get(props.animalId).then(animal => {
      setAnimal({
        name: animal.name,
        breed: animal.breed,
        picture: animal.picture
      });
      setIsLoading(false);
    });
  }, [props.animalId]);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    AnimalManager.delete(props.animalId).then(() =>
      props.history.push("/animals")
    );
  };

  
  return (
    console.log(animal.picture),
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={animal.picture} alt="My Dog" />
        </picture>
        <h3>
          Name: <span style={{ color: "darkslategrey" }}>{firstLetterCase(animal.name)}</span>
        </h3>
        <p>Breed: {animal.breed}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
      </div>
    </div>
  );
};

export default AnimalDetail;