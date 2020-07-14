import React, { useState, useEffect } from "react"
import EmployeeManager from "../../modules/EmployeeManager"
import "./EmployeeForm.css"

const EmployeeEditForm = props => {
  const [employee, setEmployee] = useState({ name: "", job: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...employee };
    stateToChange[evt.target.id] = evt.target.value;
    setEmployee(stateToChange);
  };

  const updateExistingEmployee = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedEmployee = {
      id: props.match.params.EmployeeId,
      name: employee.name,
      job: employee.job
    };

    EmployeeManager.update(editedEmployee)
      .then(() => props.history.push("/Employee"))
  }

  useEffect(() => {
    EmployeeManager.get(props.match.params.EmployeeId)
      .then(employee => {
        setEmployee(employee);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={employee.name}
            />
            <label htmlFor="name">Employee name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="job"
              value={employee.job}
            />
            <label htmlFor="job">job</label>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingEmployee}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default EmployeeEditForm