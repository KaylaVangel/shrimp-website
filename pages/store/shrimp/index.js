import data from '../../../data/data.json'
import StoreLayout from '../../components/store-layout.js'

import React from 'react'

function Shrimp () {
  return (
    <>
      <h1>Shrimp</h1>
      <p>All shrimp listed are homebreed </p>
     
      
      <StoreLayout products={data.products.shrimp} />
    </>
  )
}

export default Shrimp
