import React, {useState} from 'react';
import CalcInputForm from './components/CalcInputForm';

const Co2SavingsCalculator = () => {
  const [windowType, setWindowType] = useState("woodenSingle");
  const [heatingType, setHeatingType] = useState("naturalGas");
  const [windowArea, setWindowArea] = useState(30);
  const [livingArea, setLivingArea] = useState(80);
  const [co2Savings, setCo2Savings] = useState(0);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    const windowUValue = {
      woodenSingle: 3.50,
      woodenDouble: 1.90,
      pvcSingle: 2.80,
      pvcDouble: 1.60
    }[windowType];

    const heatingCo2Emissions = {
      naturalGas: 0.184,
      oil: 0.276,
      propane: 0.239,
      wood: 0.009
    }[heatingType];

    const energySavings = (windowUValue - 1.3) * windowArea * livingArea * 24 * 180 / 1000;
    const co2Reduction = energySavings * heatingCo2Emissions;

    const fuelSaved = {
      naturalGas: (co2Reduction / 1.96).toFixed(2),
      oil: (co2Reduction / 2.63).toFixed(2),
      propane: (co2Reduction / 1.76).toFixed(2),
      wood: (co2Reduction / 50).toFixed(2)
    }[heatingType];

    const totalSaved = co2Reduction.toFixed(2);
    const perSquareMeter = (co2Reduction / livingArea).toFixed(2);

    setCo2Savings({totalSaved, fuelSaved, perSquareMeter});
    setShowAdditionalInfo(true);

  }

  return (
    <div className="container">
      <h1>CO<sub>2</sub> Savings Calculator</h1>
      <CalcInputForm 
        handleSubmit = {handleSubmit}
        co2Savings = {co2Savings}
        showAdditionalInfo = {showAdditionalInfo}
        setWindowType = {setWindowType}
        setHeatingType = {setHeatingType}
        setLivingArea = {setLivingArea}
        setWindowArea = {setWindowArea}
        heatingType = {heatingType}
      />
    </div>
  );
}

export default Co2SavingsCalculator;
