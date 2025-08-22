import clsx from "clsx";
import { useEffect, useState } from "react";

const ProductImage = ({ product }) => {
  const images = product?.images || (product?.thumbnail ? [product.thumbnail] : []);
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Reset loader when product or image changes
  useEffect(() => {
    setActiveIndex(0);
    setImageLoaded(false);
  }, [product?.id]);

  const onThumbClick = (idx) => {
    if (idx === activeIndex) return;
    setActiveIndex(idx);
    setImageLoaded(false);
  };

  const activeSrc = images[activeIndex];

  return (
    <div className="flex-1 space-y-4">
      {/* Main image */}
      <div
        className={clsx(
          "relative w-full overflow-hidden rounded-xl border border-zinc-300 shadow-sm",
          "bg-zinc-50 h-[420px] sm:h-[520px]"
        )}
        aria-busy={!imageLoaded}
      >
        {!imageLoaded && (
          <div className="absolute inset-0 animate-pulse bg-zinc-200" />
        )}
        {activeSrc ? (
          <img
            src={activeSrc}
            alt={product.title}
            className={clsx(
              "w-full h-full object-contain transition-opacity duration-500",
              imageLoaded ? "opacity-100" : "opacity-0"
            )}
            onLoad={() => setImageLoaded(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-zinc-400">
            No image available
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {!!images.length && (
        <div className="flex gap-2 flex-wrap">
          {images.map((src, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => onThumbClick(idx)}
              className={clsx(
                "h-20 w-20 rounded-md overflow-hidden border transition transform",
                idx === activeIndex
                  ? "border-zinc-900"
                  : "border-zinc-200 hover:border-zinc-400 hover:scale-[1.02]"
              )}
              aria-label={`Show image ${idx + 1}`}
              aria-pressed={idx === activeIndex}
            >
              <img
                src={src}
                alt={`${product.title} thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImage;
