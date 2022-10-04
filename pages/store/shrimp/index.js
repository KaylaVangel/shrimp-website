import data from '../../../data/data.json'
import StoreLayout from '../../components/store-layout.js'

import React from 'react'

function Shrimp () {
  return (
    <>
      <h1>Cardina Shrimp</h1>
      <p> All Caridina sold here are kept at the same parameters.  If 
        using an active substrate like Fluval plant and shrimp stratum
         this should buffer pH for you to acceptable levels.  
         Remineralizing water to 100 TDS with the reccommended 
         product will also keep Kh and Gh levels in acceptable 
         limits. Water changes reccommended when TDS levels in tank 
         reach about 120. </p>
      <ul>
        <li>Substrate: Fluval plant and shrimp stratum</li>
        <li>Temperature: 68°F-74°F</li>
        <li>TDS: ~100 </li>
        <li>
          Water: Distilled or RO water remineralized with SaltyShrimp Bee shrimp
          remineralizer to 100 TDS
        </li>
        <li> pH: 5.5-6.7 </li>
        <li> Gh: 3-6 </li>
        <li> Kh: 0-1 </li>
      </ul>
      <StoreLayout products={data.products.shrimp} />
    </>
  )
}

export default Shrimp
