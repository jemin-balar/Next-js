// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/getblog?slug=how-to-learn-javascript
// http://localhost:3000/api/getblog
import * as fs from "fs";

export default function handler(req, res) {
  fs.readdir(`blogdata`, (err, data) => {
    // if (err) {
    //   res.status(500).json({ error: "No such blog found" });
    // }
    // console.log(req.query.slug);
    res.status(200).json(data);
  });
}
