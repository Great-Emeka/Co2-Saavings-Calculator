import React from "react";
import ApexCharts from 'apexcharts';

const CalcInputForm = (props) => {
    const chart = new ApexCharts(document.querySelector("#chart"), {
        chart: {
          type: 'bar',
          height: 350
        },
        series: [{
          name: 'CO2 Savings',
          data: [props.co2Savings.totalSaved]
        }],
        xaxis: {
          categories: ['CO2 Savings']
        }
      });
      
      chart.render();
      

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
                placeholder="Default Value: 30m²"
                name="windowArea"
                value={props.windowArea} 
                onChange={(e) => props.setWindowArea(Number(e.target.value))} />
            <br />
            <label>Living Area (m²):</label>
            <input type="number" 
                placeholder="Default Value: 80m²"
                name="livingArea"
                value={props.livingArea} 
                onChange={(e) => props.setLivingArea(Number(e.target.value))} />
            <br />
            <button 
                type="submit">
                <h2>Calculate C0<sub>2</sub> Savings</h2>
            </button>
        </form>
        {props.showAdditionalInfo && (
            <div className="result">
                <h3>RESULT:</h3>
                {props.heatingType === "naturalGas" && (
                <p className="result1">Amount of cubic meters of natural gas saved:<span style={{}}>{props.co2Savings.fuelSaved}</span> cbm per year</p>
                )}
                {["oil", "propane", "wood"].includes(props.heatingType) && (
                <p className="result1">Amount of liters of heating oil saved:<span>{props.co2Savings.fuelSaved}</span> liters per year</p>
                )}
                <p className="result1">Amount of CO2 saved by window Renovation per year: <span>{props.co2Savings.totalSaved}</span> kg CO2</p>
                <p className="result1">CO2 savings per square meter of living space: <span>{props.co2Savings.perSquareMeter} </span>kg CO2/m²</p>
                <div id="chart"></div>
                <p style={{marginTop: "2rem"}}>Thanks for checking, We can help you replace your windows</p>
            </div>
        )};
    </div>
  );
};

export default CalcInputForm;
