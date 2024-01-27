import { useState, useEffect } from 'react';
import data from '../data/data.json'

function Care () {
  const [parameters, setParameters] = useState([])

  useEffect(() => {
    setParameters(data.parameters)
  }, [])

    return (
      <>
      <h1>Shrimp Care</h1>
      
      {Object.keys(parameters).map((type, index) => {
         const {substrate, temperature, TDS, Water, pH, Kh, Gh} = data.parameters[type];
         return (
          <div className="paragraphFont" key={index}>
            <br/>
            {type.charAt(0).toUpperCase() + type.slice(1)}:
            <br/>
            Substrate: {substrate}
            <br/>
            Temperature: {temperature}
            <br/>
            TDS: {TDS}
            <br/>
            Water: {Water}
            <br/>
            pH: {pH}
            <br/>
            kH: {Kh}
            <br/>
            gH: {Gh}
          </div>
         )
         })}
      </>
      
    )
  }
  
  export default Care