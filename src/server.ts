import express from "express";
import listEndpoints from "express-list-endpoints";
import route from "./services/accommodations";

const app = express();
const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("The sedulous hyena ate the antelope!");
});
app.use("/", route);
console.table(listEndpoints(app));
app.listen(port, (err?: Object) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
