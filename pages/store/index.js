import StoreLayout from "../../components/store-layout.js";
import { getData } from "../../util/index.js";

export async function getServerSideProps() {
  const data =  await getData();
  return {props: {data}};
};
  
export default function Store({data}) {
  let allProducts = [];
  Object.keys(data.products).forEach (p => {
    allProducts=allProducts.concat(data.products[p])
  })
  return (
    <>
      <div>index</div>
      {data && (<StoreLayout products={allProducts}/>)}
    </>
  );
}
