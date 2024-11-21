import { Star } from "lucide-react";

const StarRatingView = ({ rating }) => {
    const voidStar = 5 - Math.floor(rating);
    // console.log(rating, voidStar);
    return (
        <div className="flex items-center gap-1 text-yellow-500">
            {Array(Math.floor(Math.floor(rating)))
                .fill('*')
                .map((i, idx) => (
                    <Star key={idx} fill="currentColor" size={20} />
                ))}
            {Array(voidStar).fill("*").map((item, idx) => <Star key={idx + 5} size={20} />)}
        </div>
    );
}

export default StarRatingView;