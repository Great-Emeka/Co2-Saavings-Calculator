import React, {useState} from 'react';
import CalcInputForm from './components/CalcInputForm';

const Co2SavingsCalculator = () => {
  const [formData, setFormData] = useState({
    uwOld: 3.50,
    uwNew: 1.30,
    windowArea: 30,
    livingSpace: 80,
    heatingType: 'natural_gas',
    co2EmissionsFactor: 0.184,
  });

  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const [co2Savings, setCo2Savings] = useState(0);

  //This is the function to do the calculations
  function calculateCO2Savings() {
    const { uwOld, uwNew, windowArea, livingSpace, heatingType, co2EmissionsFactor } = formData;
    const heatTransferOld = uwOld * windowArea;
    const heatTransferNew = uwNew * windowArea;
    const heatLossReduction = heatTransferOld - heatTransferNew;
    const heatingEnergySaved = heatLossReduction * livingSpace;
    const co2EmissionsSaved = heatingEnergySaved * co2EmissionsFactor;
    const savings = co2EmissionsSaved * 365 / 1000; // in kg CO2 per year
    
    setCo2Savings(savings);
  }

  function handleFormChange(e) {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  }

  return (
    <div>
      <h1>C02 Savings Calculator</h1>
      <CalcInputForm 
        handleFormChange = {handleFormChange}
        calculateCO2Savings = {calculateCO2Savings}
        formData = {formData}
        co2Savings = {co2Savings}
      />
    </div>
  );
}

export default Co2SavingsCalculator;
