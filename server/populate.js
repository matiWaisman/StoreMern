require("dotenv").config();

const connectDB = require("./db/connect");
const ProductModel = require("./models/product");

const products = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await ProductModel.deleteMany();
    await ProductModel.create(products);
    console.log("It worked!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
