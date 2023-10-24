import express from 'express';
import type { Express, Request, Response } from 'express';
import bodyParser from "body-parser";
const app = express()
const port = 3030
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.sendFile(__dirname + "/index.html")
})
app.post('/post_data', (req: Request, res: Response) => {
  console.log(req);
  res.json({data: req.body});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})