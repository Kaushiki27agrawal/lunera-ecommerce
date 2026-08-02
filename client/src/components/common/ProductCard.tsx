import { Heart, ShoppingCart } from "lucide-react";
import Price from "./Price";
import Rating from "./Rating";

type ProductCardProps = {
  name: string;
  image: string;
  price: number;
  oldPrice: number;
  rating: number;
  discount: number;
};

function ProductCard({
  name,
  image,
  price,
  oldPrice,
  rating,
  discount,
}: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-2 hover:shadow-xl">

      <div className="relative">

        <img
          src={image}
          alt={name}
          className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <span className="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-sm text-white">
          {discount}% OFF
        </span>

        <button className="absolute right-3 top-3 rounded-full bg-white p-2 shadow">
          <Heart size={18} />
        </button>

      </div>

      <div className="space-y-3 p-5">

        <h3 className="font-semibold">
          {name}
        </h3>

        <Rating rating={rating} />

        <Price
          price={price}
          oldPrice={oldPrice}
        />

        <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-pink-600 py-3 text-white transition hover:bg-pink-700">
          <ShoppingCart size={18} />
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;