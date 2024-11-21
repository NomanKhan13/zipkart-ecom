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
  console.log(cart.items);
  const isItemInCart = cart?.items?.find(item => item.productId == productId);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [productId])

  let productInfo = { quantity: 1 };

  if (isSuccess) {
    const {
      category,
      thumbnail,
      title,
      price,
      id: productId,
    } = product;

    productInfo = {
      ...productInfo, category,
      thumbnail,
      title,
      price,
      productId,
    }
  }

  console.log(productInfo)

  const { addItemToCart } = useContext(CartContext);
  const handleClick = () => isItemInCart ? navigate("/cart") : addItemToCart(productInfo);

  if (isLoading) return <ProductDetailShimmer />;
  if (isError) return <div>{error}</div>;
  if (isSuccess)
    return (
      <div className="flex justify-center py-12 px-8">
        <div className="w-full max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* heading for small screens */}
            <div className="flex lg:hidden">
              <ProductHeading product={product} />
            </div>

            {/* Product Image Section */}
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
                  btnText={isItemInCart ? "Go to cart" : "Add to cart"}
                  handleClick={handleClick}
                  btnType="filled"
                />
                <Button
                  btnIcon={<Heart className="text-red-500" size={24} />}
                  btnType="icon"
                />
              </div>
              <ProductHighlight product={product} />
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
              removeProduct={[product.id]}
            />
          </div>
        </div>
      </div>
    );
};

export default ProductDetailPage;
