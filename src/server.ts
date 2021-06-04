import express from "express";
import listEndpoints from "express-list-endpoints";
import route from "./services/accommodations";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;
app.use("/acocomodations", route);
app.use(cors());
console.table(listEndpoints(app));
mongoose
  .connect(process.env.MONGO_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(
    app.listen(port, () => {
      console.log("Running on port", port);
    })
  )
  .catch((err) => console.log(err));
