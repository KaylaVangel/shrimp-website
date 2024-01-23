const fs = require('fs').promises;
import path from "path";

export async function getData() {
    // Call an external API endpoint to get posts
    const res = await fs.readFile(path.resolve(process.cwd(), "./data/data.json"), err => {});
    const data = JSON.parse(res)

    console.log("ANYTHING");
    console.log(data);
   
    return data;
  }