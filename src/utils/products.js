const BASE_URL = 'https://dummyjson.com/products';

export const getProduct = async (productId) => {
  console.log('ran');
  const response = await fetch(`${BASE_URL}/${productId}`);
  if (!response.ok) throw new Error('Error fetching product');
  const product = await response.json();
  return product;
};

export const getAllProducts = async () => {
  const response = await fetch(`${BASE_URL}`);
  if (!response.ok) throw new Error('Facing Error in Fetching Products');
  const data = await response.json();
  return data.products;
};

export const getProductsByCategory = async (categories) => {
  if (categories.length > 1) {
    const promises = categories.map(async (category) => {
      const response = await fetch(`${BASE_URL}/category/${category}`);
      if (!response.ok) throw new Error('Facing error while fetching products');
      const data = await response.json();
      return data.products;
    });
    const results = await Promise.all(promises);
    const allProducts = results.flat();
    return allProducts;
  } else {
    const response = await fetch(`${BASE_URL}/category/${categories[0]}`);
    if (!response.ok) throw new Error('Facing error while fetching products');
    const data = await response.json();
    return data.products;
  }
};
