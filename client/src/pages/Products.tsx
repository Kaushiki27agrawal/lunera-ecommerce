import { Link } from "react-router-dom";
import { products } from "@/constants/products";

function Products() {
  return (
    <main className="min-h-screen bg-white px-6 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-pink-600">
            Lunera Collection
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            All Products
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-gray-500">
            Discover elegant pieces designed to make every outfit special.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden bg-pink-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Information */}
              <div className="p-5">
                <p className="mb-1 text-sm text-pink-600">
                  {product.category}
                </p>

                <h2 className="text-lg font-semibold text-gray-900">
                  {product.name}
                </h2>

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
                      ₹{product.originalPrice.toLocaleString("en-IN")}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Products;