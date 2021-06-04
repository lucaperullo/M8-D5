import express from "express";
import listEndpoints from "express-list-endpoints";
import { connect } from "./mongoose";
import route from "./services/accommodations";

const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;

app.use("/", route);
console.table(listEndpoints(app));
connect();
app.listen(port, (err?: Object) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
