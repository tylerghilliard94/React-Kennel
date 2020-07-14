import React, { useState, useEffect } from "react"
import LocationManager from "../../modules/LocationManager"
import "./LocationForm.css"

const LocationEditForm = props => {
  const [location, setLocation] = useState({ place: "", address: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...location };
    stateToChange[evt.target.id] = evt.target.value;
    setLocation(stateToChange);
  };

  const updateExistingLocation = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedLocation = {
      id: props.match.params.locationId,
      place: location.place,
      address: location.address
    };

    LocationManager.update(editedLocation)
      .then(() => props.history.push("/location"))
  }

  useEffect(() => {
    LocationManager.get(props.match.params.locationId)
      .then(location => {
        setLocation(location);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div classplace="formgrid">
          <label htmlFor="place">Location place</label>
            <input
              type="text"
              required
              classplace="form-control"
              onChange={handleFieldChange}
              id="place"
              value={location.place}
            />
            <br></br>
            <label htmlFor="address">Address</label>
            
            <input
              type="text"
              required
              classplace="form-control"
              onChange={handleFieldChange}
              id="address"
              value={location.address}
            />
            
          </div>
          <div classplace="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingLocation}
              classplace="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default LocationEditForm