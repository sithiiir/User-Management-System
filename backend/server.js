const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;
const host = "localhost";
const mongoose = require("mongoose");
const router = require("./router");

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://sithil2005:1234@cluster0.qioqj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error.message);
  }
};

connect();

const server = app.listen(port, host, () => {
  console.log(`Server running on port ${server.address().port}`);
});

app.use("/api", router);
