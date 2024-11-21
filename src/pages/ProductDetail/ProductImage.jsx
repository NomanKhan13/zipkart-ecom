import clsx from "clsx";
import { useState } from "react";

const ProductImage = ({ product }) => {

  const [imageLoaded, setImageLoaded] = useState(false);

    return (
      <div className="flex-1 space-y-4">
        <div className={clsx("w-full overflow-hidden rounded-lg border border-slate-400 shadow", imageLoaded ? "bg-gray-gradient" : "h-[500px] bg-[url('https://via.placeholder.com/500/')] bg-cover bg-center")}>
          <img
            src={product.images[0]}
            className={clsx("w-full h-full object-cover", imageLoaded ? "opacity-100" : "opacity-0")}
            alt={product.title}
            onLoad={() => setImageLoaded(true)}
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
  
  export default ProductImage;