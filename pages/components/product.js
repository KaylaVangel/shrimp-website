import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'



function Product ({ product }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={product.image.src} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>In stock:{product.quantity}</Card.Text>

        <Button variant='primary'>More info</Button>
      </Card.Body>
    </Card>
  )
}

export default Product
