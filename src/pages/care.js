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
      <p>***All reccommendations on products are purely based on my experience 
        and what I found works for me, not necessarily the best or only options***
              Tank Equpiment:
        RO System: 5-stage RO Buddy
        TDS meter: Milwaukee Instruments
        Lighting: I'm not into high-tech planted tanks so I have no particular lighting systems I recommend.
        Fertilizer: Aquarium co-op Easy Green.
        </p>
        <p>Tank Setup:
          I typically setup a tank with plants or sponge filters from another 
          tank and let that sit for at least 1 month.
          Water Changes: ~10% weekly if TDS meter is reading above 120.
        </p>
      
      {Object.keys(parameters).map((type, index) => {
         const {substrate, temperature, TDS, Water, pH, Kh, Gh} = data.parameters[type];
         return (
          <div className="paragraphFont" key={index}>
            <p>
              {type.charAt(0).toUpperCase() + type.slice(1)}:
            </p>
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