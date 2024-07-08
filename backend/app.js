import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import cors from "cors";
const app = express();

app.use(cors());

dotenv.config();

//connect mongoose start

const port = process.env.PORT || 3000;
const uri = process.env.MONGODBURI;
try {
  const connectdb = mongoose.connect(uri, {
    //If you connect mongodb Locally then use this two line
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Database Connected Successfully");
} catch (error) {
  console.log(error.message);
}

//Defining Routes start
app.use("/book", bookRoute);
//Defining Routes end

app.listen(port, () => {
  console.log(`Server run on port ${port}`);
});
