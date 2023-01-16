import express from "express";
import Hello from "src/page/Hello";
import { render } from "src/server/render";

const app = express();
const port = 9000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.get("/hello", (_req: express.Request, res: express.Response) => {
  const page = render(
    {
      title: "Hello World!",
      description: "Hello World!",
    },
    <Hello />
  );
  res.status(200).send(page);
});
