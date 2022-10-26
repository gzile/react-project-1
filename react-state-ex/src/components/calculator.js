import { useState } from "react";
import { toCelsius, toFahrenheit, tryConvert } from "../utils";
import { BoilingWater } from "./boilingWater";
import TemperatureInput from "./temperatureInput";

const Calculator = () => {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('c');

  const handleCelsiusChange = (t) => {
    setTemperature(t);
    setScale('c');
  }

  const handleFahrenheitChange = (t) => {
    setTemperature(t);
    setScale('f');
  }

  const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit  = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

  return(
    <div>
      <TemperatureInput 
          scale='c'  
          temperature={celsius}
          onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput 
          scale='f'
          temperature={fahrenheit}
          onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingWater celsius={parseFloat(celsius)} />
    </div>
  )
}

export default Calculator;