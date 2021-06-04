import express from "express";

const app = express();
const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("The sedulous hyena ate the antelope!");
});
app.listen(port, (err?: string) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});