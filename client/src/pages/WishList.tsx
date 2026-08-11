import { Link } from "react-router-dom";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { products } from "@/constants/products";

function Wishlist() {
  const {
    wishlistItems,
    removeFromWishlist,
    clearWishlist,
  } = useWishlist();

  const { addToCart } = useCart();

  const wishlistProducts = products.filter((product) =>
    wishlistItems.includes(product.id)
  );

  if (wishlistProducts.length === 0) {
    return (
      <main className="min-h-screen bg-white px-6 py-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center text-center">
          <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-pink-50 text-4xl">
            ♡
          </div>

          <h1 className="text-4xl font-bold text-gray-900">
            Your Wishlist is Empty
          </h1>

          <p className="mt-3 text-gray-500">
            Save your favorite pieces here and come back to them
            anytime.
          </p>

          <Link
            to="/products"
            className="mt-8 rounded-xl bg-pink-600 px-8 py-3 font-semibold text-white transition hover:bg-pink-700"
          >
            Explore Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-pink-600">
              Lunera
            </p>

            <h1 className="mt-2 text-4xl font-bold text-gray-900">
              My Wishlist
            </h1>

            <p className="mt-2 text-gray-500">
              {wishlistProducts.length}{" "}
              {wishlistProducts.length === 1
                ? "item"
                : "items"}{" "}
              saved
            </p>
          </div>

          <button
            onClick={clearWishlist}
            className="text-sm font-medium text-red-500 transition hover:text-red-700"
          >
            Clear Wishlist
          </button>
        </div>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {wishlistProducts.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
            >
              {/* Image */}
              <Link
                to={`/product/${product.id}`}
                className="group relative block aspect-square overflow-hidden bg-pink-50"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Remove */}
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    removeFromWishlist(product.id);
                  }}
                  className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-pink-600 shadow-md transition hover:bg-pink-50"
                  aria-label="Remove from wishlist"
                >
                  ♥
                </button>
              </Link>

              {/* Product Information */}
              <div className="p-5">
                <p className="text-sm text-pink-600">
                  {product.category}
                </p>

                <Link
                  to={`/product/${product.id}`}
                  className="mt-1 block text-lg font-semibold text-gray-900 transition hover:text-pink-600"
                >
                  {product.name}
                </Link>

                {/* Rating */}
                <div className="mt-2 flex items-center gap-2 text-sm">
                  <span className="text-yellow-500">
                    ★ {product.rating}
                  </span>

                  <span className="text-gray-400">
                    ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-xl font-bold text-gray-900">
                    ₹{product.price.toLocaleString("en-IN")}
                  </span>

                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      ₹
                      {product.originalPrice.toLocaleString(
                        "en-IN"
                      )}
                    </span>
                  )}
                </div>

                {/* Add to Cart */}
                <button
                  onClick={() => addToCart(product.id)}
                  disabled={!product.inStock}
                  className="mt-5 w-full rounded-xl bg-pink-600 px-5 py-3 font-semibold text-white transition hover:bg-pink-700 disabled:cursor-not-allowed disabled:bg-gray-300"
                >
                  {product.inStock
                    ? "Add to Cart"
                    : "Out of Stock"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Wishlist;