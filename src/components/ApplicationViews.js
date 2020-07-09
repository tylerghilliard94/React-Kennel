import { Route } from "react-router-dom";
import React from "react";
import Home from "./Home/Home";
import AnimalList from "./animal/AnimalList";
//only include these once they are built - previous practice exercise
import LocationList from "./Location/LocationList";
import EmployeeList from "./Employee/EmployeeList";
import OwnerList from "./Owner/OwnerList";
import AnimalDetail from "./animal/AnimalDetail";
import LocationDetails from "./Location/LocationDetails";

const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
    <Route exact path="/animals" render={(props) => {
        return <AnimalList />
        }} />

    <Route path="/animals/:animalId(\d+)" render={(props) => {
        // Pass the animalId to the AnimalDetailComponent
        return <AnimalDetail animalId={parseInt(props.match.params.animalId)}
        {...props}/>
        }} />

    <Route exact path="/location" render={(props) => {
        return <LocationList />
        }} />

    <Route path="/location/:locationId(\d+)" render={(props) => {
        // Pass the animalId to the LocationDetailComponent
        return <LocationDetails locationId={parseInt(props.match.params.locationId)}
        {...props}/>
        }} />
      <Route
        path="/Employee"
        render={props => {
          return <EmployeeList />;
        }}
      />
      <Route
        path="/Owner"
        render={props => {
          return <OwnerList />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;