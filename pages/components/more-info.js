import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'



function MoreInfo ({ product }) {
  const {seller, cost} = product.moreInfo;
  return (
    <>
      <div className="paragraphFont">
        <br/>
        Cost: {cost}
        <br />
        <a href="mailto:{seller}">Contact</a>
      </div>
    </>
  )
}

export default MoreInfo
