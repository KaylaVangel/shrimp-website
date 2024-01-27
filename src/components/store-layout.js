import Product from './product.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState, useEffect } from 'react';
import data from '../data/data.json'

const StoreLayout = ({ type }) => {
  const [products, setProducts] = useState();
  
  useEffect(() => {
    if (type === "all" && !products) {
      let allProducts = [];
      Object.keys(data.products).forEach(p => {
        allProducts = allProducts.concat(data.products[p])
      })
      setProducts(allProducts)
    } else {
      setProducts(data.products[type]);
    }
  }, []);

  return (
    <Container>
      {type === "" && <h1>All Products</h1>}
      <Col>
        <Row>
          {products && products.map((p, index) => (
              <Product p={p} key={index} />
          ))}
        </Row>
      </Col>
    </Container>
  )
}

export default StoreLayout
