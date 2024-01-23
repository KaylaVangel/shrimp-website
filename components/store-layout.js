import Product from './product.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState, useEffect } from 'react';
import someData from '../data/data.json'

const StoreLayout = ({ type }) => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('/api/data')
      .then((res) => res.json())
      .then((data) => {
        data = JSON.parse(data)
        if (type === "") {
          let allProducts = [];
          Object.keys(data.products).forEach (p => {
            allProducts=allProducts.concat(data.products[p])
          })
          setProducts(allProducts)
        } else {
          setProducts(data.products[type])
        }
      })

  }, [someData])

return (
    <Container>
      <Col>
        <Row>
          {products && products.map((p, index) => {
            return <Product product={p} key={index} />
          })}
        </Row>
      </Col>
    </Container>
  )
}

export default StoreLayout
