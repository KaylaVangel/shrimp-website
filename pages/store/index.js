import StoreLayout from "../../components/store-layout.js";
import { promises as fs } from 'fs';
import { useEffect, useState } from "react";


const Store = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const getDataFromFile = async () => {
      const file = await fs.readFile(process.cwd() + '/data.json', 'utf8');
      setData(JSON.parse(file));
    };
    getDataFromFile();
  }, []);
 


  return (
    <>
      <div>index</div>
      {data && (<StoreLayout products={data.products}/>)}
    </>
  );
}

module.exports = Store