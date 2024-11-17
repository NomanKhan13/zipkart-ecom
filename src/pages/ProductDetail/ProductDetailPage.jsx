import { Heart, Star } from 'lucide-react';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button';
import ProductsGrid from '../Category/ProductsGrid';
import { CartContext } from '../../contexts/CartContext';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  const isLoading = status === 'loading';
  const isSuccess = status === 'loaded';
  const isError = status === 'error';

  useEffect(() => {
    const fetchProductById = async () => {
      setStatus('loading');
      setError(null);
      setProduct(null);
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${productId}`
        );
        if (!response.ok)
          throw new Error('Facing error while fetching product information.');
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setStatus('error');
        setError(error.message);
      } finally {
        setStatus('loaded');
      }
    };
    fetchProductById();
  }, []);

  const productInfo = {
    category: 'kitchen-accessories',
    imageLink:
      'https://cdn.dummyjson.com/products/images/kitchen-accessories/Electric%20Stove/1.png',
    name: 'Electric Stove',
    price: 49.99,
    productId: 56,
    quantity: 3,
    total: 149.97,
  };
  const { addItemToCart } = useContext(CartContext);
  const handleClick = () => addItemToCart(productInfo);

  if (isLoading) return <div>loading</div>;
  if (isError) return <div>{error}</div>;
  if (isSuccess)
    return (
      <div className="flex justify-center py-12 px-8">
        <div className="w-full max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Product Image Section */}
            <div className="flex lg:hidden">
              <ProductHeading product={product} />
            </div>
            <ProductImage product={product} />

            {/* Product Details Section */}
            <div className="flex-1 space-y-6">
              <div className="hidden lg:flex">
                <ProductHeading product={product} />
              </div>
              <p className="text-slate-600 leading-relaxed">
                {product.description}
              </p>
              <div className="flex items-center gap-4">
                <Button
                  btnText="Add to cart"
                  handleClick={handleClick}
                  btnType="filled"
                />
                <Button
                  btnIcon={<Heart className="text-red-500" size={24} />}
                  btnType="icon"
                />
              </div>
              <ProductHightlight product={product} />
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mt-12 space-y-4">
            <h3 className="text-xl font-semibold text-slate-800">
              Recent Reviews
            </h3>
            {product.reviews.map((review, idx) => (
              <ProductReview key={review.date + idx} review={review} />
            ))}
          </div>

          {/* cutomers also bought */}
          <div className="py-8">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">
              Customers also purchased
            </h3>
            <ProductsGrid
              subCategories={[product?.category]}
              removeProduct={product.id}
            />
          </div>
        </div>
      </div>
    );
};

const ProductHeading = ({ product }) => {
  return (
    <div className="space-y-2">
      <h2 className="text-3xl font-semibold text-slate-800">{product.title}</h2>
      <p className="text-2xl font-semibold text-blue-600">${product.price}</p>
      <div className="flex items-center gap-1 text-yellow-500">
        {Array(Math.floor(product.rating))
          .fill('*')
          .map((i, idx) => (
            <Star key={idx} fill="currentColor" size={20} />
          ))}
        <Star size={20} />
      </div>
    </div>
  );
};

const ProductHightlight = ({ product }) => {
  return (
    <div className="space-y-2">
      <h3 className="font-semibold text-slate-800">Highlights</h3>
      <ul className="list-disc ml-6 text-slate-500 space-y-1">
        <li>Brand: {product.brand}</li>
        <li>Warranty Information: {product.warrantyInformation}</li>
        <li>Shipping Information: {product.shippingInformation}</li>
        <li>Return Policy: {product.returnPolicy}</li>
      </ul>
    </div>
  );
};

const ProductImage = ({ product }) => {
  return (
    <div className="flex-1 space-y-4">
      <div className="w-full overflow-hidden rounded-lg bg-background border shadow-sm">
        <img
          src={product.images[0]}
          className="w-full h-full object-cover"
          alt={product.title}
        />
      </div>
      <div className="flex gap-2 flex-wrap">
        {/* Thumbnail Images */}
        {product?.images?.map((image, idx) => (
          <div
            key={idx}
            className="h-24 w-24 border-2 rounded-md overflow-hidden border-gray-300"
          >
            <img src={image} alt={`image${idx}`} className="w-full h-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

const ProductReview = ({ review }) => {
  const dateObj = new Date(review.date);
  return (
    <div className="space-y-2 border-t pt-4">
      <div className="text-slate-500 flex items-center gap-2">
        <p className="font-medium">{review.reviewerName}</p>
        <p className="text-sm">{dateObj.toLocaleDateString()}</p>
      </div>
      <div className="flex-1">
        <div className="flex gap-1 text-yellow-500">
          {Array(Math.floor(review.rating))
            .fill(Math.floor(review.rating))
            .map((_, idx) => (
              <Star key={idx} fill="currentColor" size={18} />
            ))}
          <Star size={18} />
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-slate-700">
          {review.comment}
        </h4>
        <p className="text-slate-600">
          I was really pleased with the overall shopping experience. My order
          even included a little personal, handwritten note, which delighted me!
        </p>
      </div>
    </div>
  );
};

export default ProductDetailPage;
