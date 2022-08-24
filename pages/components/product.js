import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Product({product}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>title={product.name}</Card.Title>
        <Card.Text>
          description={product.description}
        </Card.Text>
        <Button variant="primary">More info</Button>
      </Card.Body>
    </Card>
  )
}

export default Product