import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import MoreInfo from './more-info.js'



function Product ({ product }) {
  const [moreInfo, setMoreInfo] = useState(false);

  const [item, setItem] = useState()

  useEffect(() => {
    setItem(product);
  }, [])


  const toggleModel = () => {
    setMoreInfo(!moreInfo);
  }

    <Card style={{ width: '18rem' }}>
      HELP
      {product.image && (<Card.Img variant='top' src={product.image.src} />)}
      <Card.Body>
        {product.name && <Card.Title>{product.name}</Card.Title>}

        {product.quantity <= 0 && (<Card.Text>Out of stock.</Card.Text>)}
        
        {product.quantity > 0 && (<Card.Text>In stock: {product.quantity}</Card.Text>)}

        {product.quantity > 0 && (<Button variant='primary' onClick={toggleModel}>More info</Button>)}

        {moreInfo && (<MoreInfo product={product} />)}
      </Card.Body>
    </Card>
}

export default Product
