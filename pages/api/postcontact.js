import * as fs from "fs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    let data = await fs.promises.readdir("contactdata");
    console.log(data);
    await fs.promises.writeFile(`contactdata/${data.length + 1}.json`,JSON.stringify(req.body));
    res.status(200).json({ response: "success" });
  } else {
    res.status(200).json(["allBlogs"]);
  }
}
