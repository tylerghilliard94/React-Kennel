import React from "react";


const EmployeeDropdown = props => {
  return <>
    <option value={props.employee}>{props.employee}</option>
  </>
    
  
};

export default EmployeeDropdown;