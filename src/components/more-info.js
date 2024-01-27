import { useState, useEffect } from 'react';

function MoreInfo ({ product }) {
  const [productInfo, setProductInfo] = useState()
  
  useEffect(() => {
    setProductInfo([...product.moreInfo])
  }, [])

  productInfo && (
    <>
      <div className="paragraphFont">
        <br/>
        Cost: {productInfo.cost}
        <br />
        <a href="mailto:{productInfo.seller}">Contact</a>
      </div>
    </>
  )
}

export default MoreInfo
