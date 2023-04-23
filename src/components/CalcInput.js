import React from "react";

const CalcInputForm = (props) => {
  return (
    <div>
      <form>
        <div>
          <label>UW value (formerly KF value) of the old windows:</label>
          <input
            type="number"
            name="uwOld"
            value={props.formData.uwOld}
            onChange={props.handleFormChange}
          />
        </div>
        <div>
          <label>UW value of the new windows:</label>
          <input
            type="number"
            name="uwNew"
            value={props.formData.uwNew}
            onChange={props.handleFormChange}
          />
        </div>
        <div>
          <label>Surface area of your windows:</label>
          <input
            type="number"
            name="windowArea"
            value={props.formData.windowArea}
            onChange={props.handleFormChange}
          />
        </div>
        <div>
          <label>Living Space or Area of the residence:</label>
          <input
            type="number"
            name="livingSpace"
            value={props.formData.livingSpace}
            onChange={props.handleFormChange}
          />
        </div>
        <div>
          <label>Type of Heating system:</label>
          <select
            name="heatingType"
            value={props.formData.heatingType}
            onChange={props.handleFormChange}
          >
            <option value="natural_gas">Natural Gas</option>
            <option value="oil">Oil</option>
            <option value="electricity">Electricity</option>
          </select>
        </div>
        <div>
          <label>CO2 Emission factor of the Energy supplier:</label>
          <input
            type="number"
            name="co2EmissionsFactor"
            value={props.formData.co2EmissionsFactor}
            onChange={props.handleFormChange}
          />
        </div>
      </form>

      <div>
        <button onClick={props.calculateCO2Savings}>
          Calculate CO2 Savings
        </button>
      </div>

      {props.co2Savings !== 0 && (
        <div>
          <p>CO2 Savings: {props.co2Savings.toFixed(2)}kg CO2 per year</p>
        </div>
      )}
    </div>
  );
};

export default CalcInputForm;
