import { useState, useEffect } from 'react';

function MoreInfo ({ product }) {
  const [productInfo, setProductInfo] = useState()
  
  useEffect(() => {
    setProductInfo(product.moreInfo)
  }, [])

  if (!productInfo) return <></>
  else {
    return (
      <>
        <div className="paragraphFont">
          <br/>
          Cost: {productInfo.cost}
          <br />
          <a href="mailto:Kvangel1638@gmail.com">Contact</a>
        </div>
      </>
    )
  }
}

export default MoreInfo
