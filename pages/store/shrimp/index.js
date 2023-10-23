import data from '../../../data/data.json'
import StoreLayout from '../../components/store-layout.js'

import React from 'react'

function Shrimp () {
  return (
    <>
      <h1>Shrimp</h1>
      <p>All shrimp listed are homebreed and available for local pickup in Swansea, MA. I do not ship unfortunately. </p>
     
      
      <StoreLayout products={data.products.shrimp} />
    </>
  )
}

export default Shrimp
