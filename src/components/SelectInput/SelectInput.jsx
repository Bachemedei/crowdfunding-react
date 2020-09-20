import React from "react";
import "./SelectInput.css";
import { petCategories } from "../../data";

function SelectInput({ label }) {    
  return (
    <form className="form-item">
      <label>{label}:</label>
      <select className="select-option">
        {petCategories.map((pet, key) => {
          return (
            <option key={key} value={pet.petspecies}>
              {pet.petspecies}
            </option>
          );
        })}
      </select>
    </form>
  );
}

export default SelectInput;
