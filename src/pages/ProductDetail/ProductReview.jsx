import { Star } from "lucide-react";

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
  
  export default ProductReview;