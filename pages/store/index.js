import StoreLayout from "../../components/store-layout.js";
import { promises as fs } from 'fs';

export async function getStaticProps() {
  const data = JSON.parse(await fs.readFile(process.cwd() + '/data.json', 'utf8'));
  return {
    props: {
      data,
    },
  };
}


const Store = ({data}) => {
  return (
    <>
      <div>index</div>
      {data && (<StoreLayout products={data.products}/>)}
    </>
  );
}

module.exports = Store