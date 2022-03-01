const express = require("express");
const productsRouter = require("./routes/products");
require("dotenv").config();
require("express-async-errors");

const app = express();

const connectDB = require("./db/connect");

const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    '<h1>Welcome to the store api</h1> <a href= "api/v1/products"> Go to the products json</a>'
  );
});

app.use("/api/v1/products", productsRouter);

app.use(errorHandler);
app.use(notFound);

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Server is listening on port: ${PORT}....`));
  } catch (error) {
    console.log(error);
  }
};

start();
