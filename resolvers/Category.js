const { products } = require("../db");

exports.Category = {
  products: ({ id: categoryId }, args, context) => {
    return products.filter((product) => product.categoryId === categoryId);
  },
};
