import React, { useState } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationForm.css'

const LocationForm = props => {
  const [location, setLocation] = useState({ place: "", address: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...location };
    stateToChange[evt.target.id] = evt.target.value;
    setLocation(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create location      object, invoke the LocationManager post method, and redirect to the full animal list
  */
  const constructNewLocation = evt => {
    evt.preventDefault();
    if (location.place === "" || location.address === "") {
      window.alert("Please input an location name and address");
    } else {
      setIsLoading(true);
      // Create the location and redirect user to location list
      LocationManager.post(location)
        .then(() => props.history.push("/location"));
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
              id="place"
              placeholder="Location name"
            />
            <label htmlFor="place">Location Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="address"
              placeholder="Address"
            />
            <label htmlFor="address">Address</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewLocation}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default LocationForm