import React from "react";

const OwnerCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span className="card-ownerName">{props.owner.name}</span>
        </h3>
        <p>Owns: {props.owner.pet}</p>
        <button type="button" onClick={() => props.deleteOwner(props.owner.id)}>Say Goodbye</button>
        <button type="button"
          onClick={() => props.history.push(`/Owner/${props.owner.id}/edit`)}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default OwnerCard;