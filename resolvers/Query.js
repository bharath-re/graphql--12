exports.Query = {
  hello: () => "World",

  products: (parent, { filter }, { products }) => {
    let filteredProducts = products;
    if (filter && filter.onSale === true) {
      filteredProducts = filteredProducts.filter((product) => product.onSale);
    }
    return filteredProducts;
  },

  product: (parent, { id }, { products }) => {
    return products.find((product) => product.id === id) || null;
  },

  categories: (parent, args, { categories }) => categories,

  category: (parent, { id }, { categories }) => {
    return categories.find((category) => category.id === id) || null;
  },
};
