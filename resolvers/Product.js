exports.Product = {
  category: ({ categoryId }, args, { db }) => {
    return db.categories.find((category) => category.id === categoryId);
  },
  reviews: ({ id }, { filter }, { reviews }) => {
    // Filter reviews belonging to the product
    let filteredReviews = reviews.filter((review) => review.productId === id);

    // Apply the "minRating" filter if provided
    if (filter && filter.minRating != null) {
      filteredReviews = filteredReviews.filter(
        (review) => review.rating >= filter.minRating
      );
    }

    return filteredReviews;
  },
};
