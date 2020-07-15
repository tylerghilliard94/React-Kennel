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
import AnimalEditForm from "./animal/AnimalEditForm.js"
import LocationEditForm from "./Location/LocationEditForm.js"
import EmployeeEditForm from "./Employee/EmployeeEditForm.js"
import OwnerEditForm from "./Owner/OwnerEditForm.js"
import EmployeeWithAnimals from "./Employee/EmployeeWithAnimals.js"

const ApplicationViews = (taco) => {
  
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />

    <Route path="/login"  render={(props) => {
     
      return <Login setUser={taco.setUser} {...props}  />

    }} />

    <Route path="/animals/new" render={(props) => {
      if (taco.hasUser) {
        return <AnimalForm {...props} />
        } else {
          return <Redirect to="/login" />
    
    }
      
    }} />

    <Route exact path="/animals" render={props => {
      if (taco.hasUser) {
      return <AnimalList {...props} />
      } else {
        return <Redirect to="/login" />
      }
    }} />

    <Route path="/animals/:animalId(\d+)/edit" render={props => {
      if (taco.hasUser) {
        return <AnimalEditForm {...props} />
      } else {
        return <Redirect to="/login" />
      }
    }} />

    <Route exact path="/animals/:animalId(\d+)" render={(props) => {
        // Pass the animalId to the AnimalDetailComponent
        if (taco.hasUser) {
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)}
        {...props}/>
          } else {
            return <Redirect to="/login" />
      
      }
        
        }} />

    <Route path="/location/new" render={(props) => {
      if (taco.hasUser) {
        return <LocationForm {...props} />
        } else {
          return <Redirect to="/login" />
    
    }
      
    }} />

   
    <Route exact path="/location" render={props => {
      return <LocationList {...props} hasUser={taco.hasUser} />
    }} />

    <Route exact path="/location/:locationId(\d+)" render={(props) => {
        if (taco.hasUser) {
          return <LocationDetails locationId={parseInt(props.match.params.locationId)}
        {...props}/>
          } else {
            return <Redirect to="/login" />
          }// Pass the animalId to the LocationDetailComponent
        
    }} />
    <Route path="/location/:locationId(\d+)/edit" render={props => {
      if (taco.hasUser) {
        return <LocationEditForm {...props} />
      } else {
        return <Redirect to="/login" />
      }
    }} />
      <Route path="/Employee/new" render={(props) => {
        if (taco.hasUser) {
          return <EmployeeForm {...props} />
          } else {
            return <Redirect to="/login" />
      
      }
    }} />
     
     <Route exact path="/Employee" render={props => {
        if (taco.hasUser) {
        return <EmployeeList {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />

  <Route path="/Employee/:EmployeeId(\d+)/edit" render={props => {
      if (taco.hasUser) {
        return <EmployeeEditForm {...props} />
      } else {
        return <Redirect to="/login" />
      }
    }} />

    <Route path="/Employee/:EmployeeId(\d+)/details" render={(props) => {
    return <EmployeeWithAnimals {...props} />
    }} />

      <Route path="/Owner/new" render={(props) => {
        if (taco.hasUser) {
          return <OwnerForm {...props} />
          } else {
            return <Redirect to="/login" />
      
      }
      
      }} />

    <Route exact path="/Owner" render={props => {
      if (taco.hasUser) {
      return <OwnerList {...props} />
      } else {
        return <Redirect to="/login" />
      }
    }} />

    <Route path="/Owner/:OwnerId(\d+)/edit" render={props => {
      if (taco.hasUser) {
        return <OwnerEditForm {...props} />
      } else {
        return <Redirect to="/login" />
      }
    }} />
    </React.Fragment>
  );
};

export default ApplicationViews;