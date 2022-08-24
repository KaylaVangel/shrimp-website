import data from "../../../data/data.json";
import StoreLayout from "../../components/store-layout.js";

function All() {
  let AllProducts = [];
  Object.keys(data.products).forEach (p => {
    AllProducts=AllProducts.concat(data.products[p])
  })
 
  return (
    <>
    <h1>All Products</h1>
    <StoreLayout products={AllProducts}/>
    </>
  )
}

export default All