import data from '../../data/data.json'
import Product from './product.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function StoreLayout ({ products }) {
  return (
    <Container>
      <Col>
        <Row>
          {products.map((p, index) => {
            return <Product product={p} key={index}/>
          })}
        </Row>
      </Col>
    </Container>
  )
}

export default StoreLayout
