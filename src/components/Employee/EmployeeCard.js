import React from "react";

const EmployeeCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span className="card-employeeName">{props.employee.name}</span>
        </h3>
        <p>Job: {props.employee.job}</p>
        <button type="button" onClick={() => props.deleteEmployee(props.employee.id)}>Fire!</button>
        <button type="button"
        onClick={() => { props.history.push(`/Employee/${props.employee.id}/details`) }}>Details</button>
        <button type="button"
          onClick={() => props.history.push(`/Employee/${props.employee.id}/edit`)}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;