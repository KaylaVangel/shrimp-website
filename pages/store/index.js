import StoreLayout from "../../components/store-layout.js";
import { promises as fs } from 'fs';
import { useState, useEffect } from "react";

export async function getStaticProps() {
  const data = JSON.parse(await fs.readFile(process.cwd() + '/data/data.json', 'utf8'));
  return {
    props: {
      data: data,
      revalidate: 10, // In seconds
      notFound: !data,
    },
  };
  
}


export default function Store({data}) {
  const [allProducts, setAllProducts] = useState();

  useEffect(() => {
    if(data) {
      setAllProducts([]);
      Object.keys(data.products).forEach (p => {
        setAllProducts(allProducts.concat(data.products[p]))
      })
    }
  
   }, [data])

  

  return (
    <>
      <div>index</div>
      {data && (<StoreLayout products={allProducts}/>)}
    </>
  );
}
