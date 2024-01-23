import StoreLayout from "../../components/store-layout.js";
import { getData } from "../../util/index.js";

export const getServerSideProps = (async () => {
  const data =  await getData();
  return {props: {data}};
});
  
export default function Store({data}) {
  let allProducts = [];

  Object.keys(data.products).forEach (p => {
    allProducts=allProducts.concat(data.products[p])
  })
  return (
    <>
      <div>index</div>
      <StoreLayout products={allProducts}/>
    </>
  );
}
