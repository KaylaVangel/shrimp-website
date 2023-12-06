import data from "../../../data/data.json";
import StoreLayout from "../../components/store-layout.js";

const Frags = () => {
  return (
  <>
      <h1>Frags</h1>
      <p> All Frags can be picked up locally or shipped. </p>
      <StoreLayout products={data.products.frags}/>

    </>
  );
}

export default Frags;