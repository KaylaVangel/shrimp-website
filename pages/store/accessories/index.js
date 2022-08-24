import data from "../../../data/data.json";
import StoreLayout from "../../components/store-layout.js";

function Accessories() {
  return (
    <>
    <h1>3D Printed Aquarium Accessories</h1>
    <StoreLayout products={data.products.accessories}/>

    </>
  )
}

export default Accessories