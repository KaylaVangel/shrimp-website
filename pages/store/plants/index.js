import data from "../../../data/data.json";
import StoreLayout from "../../components/store-layout.js";

const Plants = () => {
  return (
  <>
      <h1>Plants</h1>
      <StoreLayout products={data.products.plants}/>

    </>
  );
}

export default Plants;