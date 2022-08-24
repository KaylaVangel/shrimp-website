
import data from '../../data/data.json';
import Product from './product.js';

function StoreLayout({products}) {
  return (
    <>
     {products.map(p => {
      return <Product product={p}/>
     })}
    </>
  )
}

export default StoreLayout