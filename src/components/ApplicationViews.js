import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./Home/Home";
import AnimalList from "./animal/AnimalList";
//only include these once they are built - previous practice exercise
import LocationList from "./Location/LocationList";
import EmployeeList from "./Employee/EmployeeList";
import OwnerList from "./Owner/OwnerList";
import AnimalDetail from "./animal/AnimalDetail";
import LocationDetails from "./Location/LocationDetails";
import AnimalForm from "./animal/AnimalForm.js";
import LocationForm from './Location/LocationForm.js'
import EmployeeForm from './Employee/EmployeeForm.js'
import OwnerForm from './Owner/OwnerForm.js'
import Login from "./Auth/Login.js";

const ApplicationViews = () => {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />

    <Route path="/login" render={(props) => {
     
      return <Login {...props}/>

    }} />

    <Route path="/animals/new" render={(props) => {
      return <AnimalForm {...props} />
    }} />

    <Route exact path="/animals" render={props => {
      if (isAuthenticated()) {
      return <AnimalList {...props} />
      } else {
        return <Redirect to="/login" />
      }
    }} />

    <Route path="/animals/:animalId(\d+)" render={(props) => {
        // Pass the animalId to the AnimalDetailComponent
        return <AnimalDetail animalId={parseInt(props.match.params.animalId)}
        {...props}/>
        }} />

    <Route path="/location/new" render={(props) => {
      return <LocationForm {...props} />
    }} />

   
    <Route exact path="/location" render={props => {
      if (isAuthenticated()) {
      return <LocationList {...props} />
      } else {
        return <Redirect to="/login" />
      }
    }} />

    <Route path="/location/:locationId(\d+)" render={(props) => {
        // Pass the animalId to the LocationDetailComponent
        return <LocationDetails locationId={parseInt(props.match.params.locationId)}
        {...props}/>
    }} />

      <Route path="/Employee/new" render={(props) => {
      return <EmployeeForm {...props} />
      }} />
     
     <Route exact path="/Employee" render={props => {
        if (isAuthenticated()) {
        return <EmployeeList {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />

      <Route path="/Owner/new" render={(props) => {
      return <OwnerForm {...props} />
      }} />

    <Route exact path="/Owner" render={props => {
      if (isAuthenticated()) {
      return <OwnerList {...props} />
      } else {
        return <Redirect to="/login" />
      }
    }} />
    </React.Fragment>
  );
};

export default ApplicationViews;