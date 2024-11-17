const ProductQuantitySelector = ({ productQty, setProductQty }) => {
  return (
    <div className="inline-flex justify-center w-28 items-center gap-2 border border-gray-300 rounded-full py-1 px-3">
      <button
        aria-label="Decrease quantity"
        className="text-lg font-semibold"
        onClick={() =>
          setProductQty((prevState) => (prevState === 1 ? 1 : prevState - 1))
        }
      >
        -
      </button>
      <span className="px-2 font-semibold">{productQty}</span>
      <button
        aria-label="Increase quantity"
        className="text-lg font-semibold"
        onClick={() => setProductQty((prevState) => prevState + 1)}
      >
        +
      </button>
    </div>
  );
};

export default ProductQuantitySelector;
