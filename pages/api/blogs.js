// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";

export default async function handler(req, res) {
  // let page = 1, perpage = 5
  // let skip = perpage * page - perpage
  let data = await fs.promises.readdir(`blogdata`);
  console.log(data);
  console.log(req.query.count);
  data = data.slice(0, parseInt(req.query.count));
  let myfile;
  let allBolgs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    console.log(item);
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    console.log(myfile);
    allBolgs.push(JSON.parse(myfile));
  }
  res.status(200).json(allBolgs);
}
