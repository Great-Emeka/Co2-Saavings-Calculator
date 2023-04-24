import React from "react";

const CalcInputForm = (props) => {
  return (
    <div>
        <form onSubmit={props.handleSubmit}>
            <label>Window Type:</label>
            <select 
                name="windowType"
                value={props.windowType} 
                onChange={(e) => props.setWindowType(e.target.value)}>
                <option value="woodenSingle">Wooden Single Glazing</option>
                <option value="woodenDouble">Wooden Double Glazing</option>
                <option value="pvcSingle">PVC Single Glazing</option>
                <option value="pvcDouble">PVC Double Glazing</option>
            </select>
            <br />
            <label>Heating Type:</label>
            <select
                name="heatingType" 
                value={props.heatingType} 
                onChange={(e) => props.setHeatingType(e.target.value)} >
                <option value="naturalGas">Natural Gas</option>
                <option value="oil">Oil</option>
                <option value="propane">Propane</option>
                <option value="wood">Wood</option>
            </select>
            <br />
            <label>Window Area (m²):</label>
            <input type="number" 
                placeholder="Default 30m²"
                name="windowArea"
                value={props.windowArea} 
                onChange={(e) => props.setWindowArea(Number(e.target.value))} />
            <br />
            <label>Living Area (m²):</label>
            <input type="number" 
                placeholder="Default 80m²"
                name="livingArea"
                value={props.livingArea} 
                onChange={(e) => props.setLivingArea(Number(e.target.value))} />
            <br />
            <button 
                type="submit">
                Calculate
            </button>
        </form>
        {props.showAdditionalInfo && (
            <div className="result">
                <h3>Results:</h3>
                {props.heatingType === "naturalGas" && (
                <p>Amount of cubic meters of natural gas saved: {props.co2Savings.fuelSaved} cbm per year</p>
                )}
                {["oil", "propane", "wood"].includes(props.heatingType) && (
                <p>Amount of liters of heating oil saved: {props.co2Savings.fuelSaved} liters per year</p>
                )}
                <p>Amount of CO2 saved by window Renovation per year: {props.co2Savings.totalSaved} kg CO2</p>
                <p>CO2 savings per square meter of living space: {props.co2Savings.perSquareMeter} kg CO2/m²</p>
                <p>Thanks for checking, We can help you replace your windows</p>
            </div>
        )};
    </div>
  );
};

export default CalcInputForm;
