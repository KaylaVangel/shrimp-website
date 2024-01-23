import StoreLayout from "../../components/store-layout.js";
import { useState, useEffect } from "react";
import { getData } from "../../util/index.js"

export async function getServerSideProps() {
  const data =  await getData();
  return {props: {data}};
};
  
export default function Store() {
  return (
    <>
      <div>index</div>
      {data && (<StoreLayout products={allProducts}/>)}
    </>
  );
}
