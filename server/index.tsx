import express from "express";

const app = express();
const port = 9000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello world");
});
