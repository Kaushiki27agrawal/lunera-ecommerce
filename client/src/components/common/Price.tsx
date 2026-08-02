type PriceProps = {
  price: number;
  oldPrice: number;
};

function Price({ price, oldPrice }: PriceProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xl font-bold text-pink-600">
        ₹{price}
      </span>

      <span className="text-gray-400 line-through">
        ₹{oldPrice}
      </span>
    </div>
  );
}

export default Price;