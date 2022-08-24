import data from '../../../data/data.json'
import StoreLayout from '../../components/store-layout.js'

import React from 'react'

function Shrimp () {
  return (
    <>
      <h1>Cardina Shrimp</h1>
      <StoreLayout products={data.products.shrimp}/>
      
    </>
  )
}

export default Shrimp
