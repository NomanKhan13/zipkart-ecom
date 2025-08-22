import { Heart } from 'lucide-react';
import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/Button';
import ProductsGrid from '../Category/ProductsGrid';
import { CartContext } from '../../contexts/CartContext';
import useProduct from '../../hooks/useProduct';
import ProductHeading from './ProductHeading';
import ProductImage from './ProductImage';
import ProductHighlight from './ProductHighlight';
import ProductReview from './ProductReview';
import ProductDetailShimmer from './ProductDetailShimmer';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const { isLoading, isError, error, isSuccess, product } = useProduct(productId);

  const { cart } = useContext(CartContext);
  const isItemInCart = cart?.items?.find(item => item.productId == productId);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  let productInfo = { quantity: 1 };

  if (isSuccess) {
    const { category, thumbnail, title, price, id: productId, brand } = product;
    productInfo = { ...productInfo, category, thumbnail, title, price, productId, brand };
  }

  const { addItemToCart } = useContext(CartContext);
  const handleClick = () => (isItemInCart ? navigate('/cart') : addItemToCart(productInfo));

  if (isLoading) return <ProductDetailShimmer />;
  if (isError) return <div className="text-zinc-700 px-4 py-8">{error}</div>;

  if (isSuccess)
    return (
      <div className="flex justify-center py-20 px-4 md:px-8">
        <div className="w-full max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Heading (mobile) */}
            <div className="flex lg:hidden">
              <ProductHeading product={product} />
            </div>

            {/* Gallery */}
            <ProductImage product={product} />

            {/* Right column */}
            <div className="flex-1 space-y-6">
              {/* Heading (desktop) */}
              <div className="hidden lg:flex">
                <ProductHeading product={product} />
              </div>

              <p className="text-zinc-600 leading-relaxed">
                {product.description}
              </p>

              <div className="flex items-center gap-4">
                <Button
                  btnText={isItemInCart ? 'Go to cart' : 'Add to cart'}
                  handleClick={handleClick}
                  btnType="filled"
                />
                <Button
                  btnIcon={<Heart className="text-red-500" size={22} />}
                  btnType="icon"
                  aria-label="Add to wishlist"
                />
              </div>

              <ProductHighlight product={product} />
            </div>
          </div>

          {/* Reviews */}
          <div className="mt-20 space-y-6">
            <h3 className="text-xl font-semibold text-zinc-900">Recent Reviews</h3>
            {product.reviews?.map((review, idx) => (
              <ProductReview key={review.date + idx} review={review} />
            ))}
          </div>

          {/* Customers also purchased */}
          <div className="py-20">
            <h3 className="text-2xl font-semibold text-zinc-900 mb-4">
              Customers also purchased
            </h3>
            <ProductsGrid
              subCategories={[product?.category]}
              removeProduct={[product.id]}
            />
          </div>
        </div>
      </div>
    );
};

export default ProductDetailPage;
