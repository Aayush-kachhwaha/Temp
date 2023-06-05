import React, { useState } from 'react';

const App = () =>{
  const [temperatureValue, setTemperatureValue]=useState(27);
  const [temperatureColor, setTemperatureColor]=useState("cold");

  const increaseTemperature =()=>{
    const newTemperature = temperatureValue + 1;
    if(temperatureValue ===50) return;
    if (newTemperature>=30){
      setTemperatureColor("hot")
    }
    setTemperatureValue(newTemperature)
  }

  const decreaseTemperature =()=>{
    const newTemperature = temperatureValue - 1;
    if(temperatureValue ===-25) return;
    if (newTemperature <15){
      setTemperatureColor("cold")
    }
    setTemperatureValue(newTemperature)
  }

  return(
    <div className='app-container'>
      <div className='temperature-display-container'>
        <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}℃</div>
      </div>
      <div className='button-container'>
        <button onClick={()=> increaseTemperature() }>+</button>
        <button onClick={()=> decreaseTemperature() }>-</button>
      </div>
    </div>
  )
}

export default App;
