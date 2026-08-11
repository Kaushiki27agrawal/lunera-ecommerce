import { Link, useParams } from "react-router-dom";
import { products } from "@/constants/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

function ProductDetails() {
  const { id } = useParams<{ id: string }>();

  const { addToCart } = useCart();

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  const product = products.find((item) => item.id === id);

  // Product not found
  if (!product) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center px-6">
        <h1 className="text-4xl font-bold text-gray-900">
          Product Not Found
        </h1>

        <p className="mt-3 text-gray-500">
          The product you're looking for doesn't exist.
        </p>

        <Link
          to="/products"
          className="mt-6 rounded-lg bg-pink-600 px-6 py-3 font-medium text-white transition hover:bg-pink-700"
        >
          Back to Products
        </Link>
      </main>
    );
  }

  const wishlisted = isInWishlist(product.id);

  return (
    <main className="min-h-screen bg-white px-6 py-12">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">

        {/* Product Image */}
        <div className="overflow-hidden rounded-3xl bg-pink-50">
          <img
            src={product.image}
            alt={product.name}
            className="h-full max-h-[600px] w-full object-cover"
          />
        </div>

        {/* Product Information */}
        <div className="flex flex-col justify-center">

          {/* Category */}
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-pink-600">
            {product.category}
          </p>

          {/* Product Name */}
          <h1 className="mt-3 text-4xl font-bold text-gray-900">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="mt-4 flex items-center gap-3">
            <span className="text-yellow-500">
              ★ {product.rating}
            </span>

            <span className="text-gray-500">
              {product.reviews} reviews
            </span>
          </div>

          {/* Price */}
          <div className="mt-6 flex items-center gap-4">
            <span className="text-3xl font-bold text-gray-900">
              ₹{product.price.toLocaleString("en-IN")}
            </span>

            {product.originalPrice && (
              <span className="text-lg text-gray-400 line-through">
                ₹
                {product.originalPrice.toLocaleString(
                  "en-IN"
                )}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="mt-6 leading-7 text-gray-600">
            {product.description}
          </p>

          {/* Color */}
          <div className="mt-8">
            <h3 className="mb-3 font-semibold text-gray-900">
              Color
            </h3>

            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <span
                  key={color}
                  className="rounded-full border border-gray-200 px-4 py-2 text-sm"
                >
                  {color}
                </span>
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="mt-6">
            <h3 className="mb-3 font-semibold text-gray-900">
              Size
            </h3>

            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className="rounded-lg border border-gray-200 px-4 py-2 text-sm transition hover:border-pink-500 hover:text-pink-600"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Cart + Wishlist Buttons */}
          <div className="mt-8 flex gap-3">

            {/* Add to Cart */}
            <button
              disabled={!product.inStock}
              onClick={() => addToCart(product.id)}
              className="flex-1 rounded-xl bg-pink-600 px-6 py-4 font-semibold text-white transition hover:bg-pink-700 disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              {product.inStock
                ? "Add to Cart"
                : "Out of Stock"}
            </button>

            {/* Wishlist */}
            <button
              onClick={() => {
                if (wishlisted) {
                  removeFromWishlist(product.id);
                } else {
                  addToWishlist(product.id);
                }
              }}
              className={`flex h-14 w-14 items-center justify-center rounded-xl border text-2xl transition ${
                wishlisted
                  ? "border-pink-600 bg-pink-50 text-pink-600"
                  : "border-gray-200 text-gray-500 hover:border-pink-500 hover:text-pink-600"
              }`}
              aria-label={
                wishlisted
                  ? "Remove from wishlist"
                  : "Add to wishlist"
              }
            >
              {wishlisted ? "♥" : "♡"}
            </button>
          </div>

          {/* Stock Status */}
          <div className="mt-5">
            {product.inStock ? (
              <p className="text-sm font-medium text-green-600">
                ✓ In stock and ready to ship
              </p>
            ) : (
              <p className="text-sm font-medium text-red-500">
                Currently out of stock
              </p>
            )}
          </div>

          {/* Continue Shopping */}
          <Link
            to="/products"
            className="mt-5 text-center text-sm font-medium text-gray-500 transition hover:text-pink-600"
          >
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;