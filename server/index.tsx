import express from "express";
import App from "src";
import { render } from "src/render";

const app = express();
const port = 9000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.get("/", (_req: express.Request, res: express.Response) => {
  const page = render(
    {
      title: "Hello World!",
      description: "Hello World!",
    },
    <App />
  );
  res.status(200).send(page);
});

app.get("/hello", (_req: express.Request, res: express.Response) => {
  res.send("Hello world!");
});
