import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetails.css'

const LocationDetail = props => {
  const [location, setLocation] = useState({ place: "", address: "" });
  const [isLoading, setIsLoading] = useState([]);

  useEffect(() => {
    //get(id) from LocationManager and hang on to the data; put it into state
    LocationManager.get(props.locationId)
      .then(location => {
        setLocation({
          place: location.place,
          address: location.address
        });
        setIsLoading(false);
      });
  }, [props.locationId]);

  const handleDelete = () => {
    setIsLoading(true);
    LocationManager.delete(props.locationId).then(() => 
    props.history.push("/location")
    );
  };

  return (
    <div className="card">
      <div className="card-content">
        <h3>Place: <span style={{ color: 'darkslategrey' }}>{location.place}</span></h3>
        <p>{location.address}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>Close</button>
      </div>
    </div>
  );
}

export default LocationDetail;