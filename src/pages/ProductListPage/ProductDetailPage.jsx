import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { ProductContext } from '../../contexts/ProductContext';
import ProductHeading from './ProductHeading';
import ProductImage from './ProductImage';
import ProductQuantitySelector from './ProductQuantitySelector';
import AddToCartButton from './AddToCartButton';
import ProductPolicy from './ProductPolicy';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { cart, addItemToCart } = useContext(CartContext);
  const { updateProducts, getProductById, productsLoading, allProducts } =
    useContext(ProductContext);

  const [product, setProduct] = useState(null);
  const [productQty, setProductQty] = useState(1);
  const [addingToCart, setAddingToCart] = useState(false);

  console.log(product);

  useEffect(() => {
    if (!productsLoading) {
      console.log('fetch');
      const fetchedProduct = getProductById(productId);
      setTimeout(() => setProduct(fetchedProduct), 2000);
      setProductQty(fetchedProduct?.cartStatus?.quantity || 1);
    }
  }, [productsLoading, productId, allProducts]);

  const handleAddToCart = () => {
    setAddingToCart(true);
    const { id, title, price, rating, reviews, thumbnail, discountPercentage } =
      product;
    const cartItem = {
      id,
      title,
      price,
      rating,
      reviews,
      thumbnail,
      discountPercentage,
      quantity: productQty,
    };
    addItemToCart({ item: cartItem });
    updateProducts(productId, { isInCart: true, quantity: productQty });
    setTimeout(() => {
      setAddingToCart(false);
    }, 2000);
  };

  const handleGoToCart = () => navigate('/cart');

  if (productsLoading)
    return <div className="text-center mt-8">Loading...</div>;

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      {product && (
        <div className="flex justify-center mt-8 px-4 pb-8">
          <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8">
            <div className="block md:hidden">
              <ProductHeading product={product} />
            </div>
            <div className="flex-1 p-4 bg-white shadow-lg rounded-lg">
              <ProductImage product={product} />
            </div>
            <div className="flex-1 flex flex-col gap-6 sticky top-8">
              <div className="hidden md:block">
                <ProductHeading product={product} />
              </div>
              <div className="flex items-center gap-4">
                <ProductQuantitySelector
                  productQty={productQty}
                  setProductQty={setProductQty}
                />
                <AddToCartButton
                  handleAddToCart={handleAddToCart}
                  handleGoToCart={handleGoToCart}
                  isInCart={product?.cartStatus?.isInCart}
                  addingToCart={addingToCart}
                />
              </div>
              <p className="leading-relaxed text-gray-700 mt-4">
                {product.description}
              </p>
              <hr className="border-gray-200 my-4" />
              <div className="flex flex-col gap-4">
                <ProductPolicy
                  icon="Timer"
                  label="Shipping Time"
                  text={
                    product.shippingInformation ||
                    'Standard shipping times apply'
                  }
                />
                <ProductPolicy
                  icon="ShieldCheck"
                  label="Warranty Period"
                  text={product.warrantyInformation || 'No Warranty'}
                />
                <ProductPolicy
                  icon="Recycle"
                  label="Return Policy"
                  text={product.returnPolicy || 'No Returns Policy'}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
