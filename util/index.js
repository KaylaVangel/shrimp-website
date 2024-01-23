const fs = require("fs");
import path from "path";

export async function getData() {
    // Call an external API endpoint to get posts
    const res = fs.readFile(path.resolve(process.cwd(), "./data/data.json"), err => {});
    const data = JSON.parse(res)
   
    return data;
  }