import { Star } from "lucide-react";

type RatingProps = {
  rating: number;
};

function Rating({ rating }: RatingProps) {
  return (
    <div className="flex items-center gap-1">
      <Star size={16} className="fill-yellow-400 text-yellow-400" />
      <span className="text-sm font-medium">{rating}</span>
    </div>
  );
}

export default Rating;