const { geoSearch } = require("../models/product");
const Product = require("../models/product");

const getProducts = async (req, res) => {
  const { featured, company, name, sort, props, numericFilters, all } =
    req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }

  if (company) {
    queryObject.company = company;
  }

  if (name) {
    //All the array bs is because idk why when i set the url in my frontend sometimes the req.query is a two string array instead of a single string
    var arrayName = "";
    if (name[0].length > 1) {
      arrayName = name[0];
      queryObject.name = { $regex: arrayName, $options: "i" };
    } else {
      queryObject.name = { $regex: name, $options: "i" };
    }
  }

  if (numericFilters) {
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<": "$lt",
      "<=": "$lte",
    };
    const regEx = /\b(<|>|>=|=|<|<=)\b/g;
    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );
    const options = ["price", "rating"];
    filters = filters.split(",").forEach((item) => {
      const [field, operator, value] = item.split("-");
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
  }

  let result = Product.find(queryObject);

  if (sort) {
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  } else {
    result = result.sort("createdAt");
  }

  if (props) {
    const propsList = props.split(",").join(" ");
    result = result.select(propsList);
  }

  const products = await result;
  res.status(200).json({ products, amount: products.length });
};

module.exports = {
  getProducts,
};
