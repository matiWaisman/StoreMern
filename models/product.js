const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "product name must be provided"],
  },
  price: {
    type: Number,
    required: [true, "product price must be provided"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.3,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: [
        "Nike",
        "Adidas",
        "Puma",
        "Balenciaga",
        "New Balance",
        "Air Jordan",
        "Reebok",
      ],
      message: "{VALUE} is not avaiable",
    },
  },
  img: {
    type: String,
    required: [true, "Image must be provided"],
  },
});

module.exports = mongoose.model("Product", productSchema);
