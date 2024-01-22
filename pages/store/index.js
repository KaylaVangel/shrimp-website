import StoreLayout from "../../components/store-layout.js";
import { promises as fs } from 'fs';

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
  let AllProducts = [];
  Object.keys(data.products).forEach (p => {
    AllProducts=AllProducts.concat(data.products[p])
  })

  return (
    <>
      <div>index</div>
      {data && (<StoreLayout products={AllProducts}/>)}
    </>
  );
}
