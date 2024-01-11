const express = require("express");
const cors = require("cors");
const productsRouter = require("./routes/products");
require("express-async-errors");
const path = require("path");

const app = express();

app.use(cors());

const connectDB = require("./db/connect");

const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

app.use(express.json());

app.use("/api/v1/products", productsRouter);

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Server is listening on port: ${PORT}....`));
  } catch (error) {
    console.log(error);
  }
};

app.use(errorHandler);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    const indexPath = path.join(__dirname, "client", "build", "index.html");
    res.sendFile(indexPath);
  });
} else {
  app.get("/", (req, res) => {
    res.send("Api running");
  });
}

app.use(notFound);

start();
