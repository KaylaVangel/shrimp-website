import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import MoreInfo from './more-info.js'



const Product = ({ p }) => {
  const [product, setProduct] = useState();
  const [moreInfo, setMoreInfo] = useState(false);

  useEffect(() => {
    setProduct(p);
  }, [p])

  const toggleModel = () => {
    setMoreInfo(!moreInfo);
  }

  if (!product) return (<>loading...</>)
  else {
    return (
      <>
        <Card style={{ width: '18rem' }} >
          <Card.Img variant='top' src={product.image.src} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>

            {product.quantity <= 0 && (<Card.Text>Out of stock.</Card.Text>)}

            {product.quantity > 0 && (<Card.Text>In stock: {product.quantity}</Card.Text>)}

            {product.quantity > 0 && (<Button variant='primary' onClick={toggleModel}>More info</Button>)}

            {moreInfo && (<MoreInfo p={product} />)}
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default Product
