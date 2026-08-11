import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { products } from "@/constants/products";

function Cart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    getCartTotal,
  } = useCart();

  const total = getCartTotal();

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-white px-6 py-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center text-center">
          <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-pink-50 text-4xl">
            🛒
          </div>

          <h1 className="text-4xl font-bold text-gray-900">
            Your Cart is Empty
          </h1>

          <p className="mt-3 text-gray-500">
            Looks like you haven't added anything to your cart yet.
          </p>

          <Link
            to="/products"
            className="mt-8 rounded-xl bg-pink-600 px-8 py-3 font-semibold text-white transition hover:bg-pink-700"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-pink-600">
              Lunera
            </p>

            <h1 className="mt-2 text-4xl font-bold text-gray-900">
              Your Shopping Cart
            </h1>
          </div>

          <button
            onClick={clearCart}
            className="text-sm font-medium text-red-500 hover:text-red-700"
          >
            Clear Cart
          </button>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="space-y-4 lg:col-span-2">
            {cartItems.map((item) => {
              const product = products.find(
                (product) => product.id === item.productId
              );

              if (!product) {
                return null;
              }

              const itemTotal = product.price * item.quantity;

              return (
                <div
                  key={item.productId}
                  className="flex gap-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
                >
                  {/* Product Image */}
                  <Link
                    to={`/product/${product.id}`}
                    className="h-28 w-28 shrink-0 overflow-hidden rounded-xl bg-pink-50"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                  </Link>

                  {/* Product Information */}
                  <div className="flex min-w-0 flex-1 flex-col justify-between">
                    <div className="flex justify-between gap-4">
                      <div>
                        <p className="text-sm text-pink-600">
                          {product.category}
                        </p>

                        <Link
                          to={`/product/${product.id}`}
                          className="mt-1 block text-lg font-semibold text-gray-900 hover:text-pink-600"
                        >
                          {product.name}
                        </Link>
                      </div>

                      <button
                        onClick={() =>
                          removeFromCart(product.id)
                        }
                        className="text-sm text-gray-400 hover:text-red-500"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      {/* Quantity */}
                      <div className="flex items-center rounded-lg border border-gray-200">
                        <button
                          onClick={() =>
                            decreaseQuantity(product.id)
                          }
                          className="px-3 py-2 text-lg hover:bg-gray-50"
                        >
                          −
                        </button>

                        <span className="min-w-10 text-center font-medium">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQuantity(product.id)
                          }
                          className="px-3 py-2 text-lg hover:bg-gray-50"
                        >
                          +
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="font-bold text-gray-900">
                          ₹{itemTotal.toLocaleString("en-IN")}
                        </p>

                        {item.quantity > 1 && (
                          <p className="text-xs text-gray-400">
                            ₹
                            {product.price.toLocaleString(
                              "en-IN"
                            )}{" "}
                            each
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order Summary */}
          <div className="h-fit rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">
              Order Summary
            </h2>

            <div className="mt-6 space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>

                <span className="font-medium text-gray-900">
                  ₹{total.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Shipping</span>

                <span className="font-medium text-green-600">
                  FREE
                </span>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <span className="text-lg font-semibold">
                    Total
                  </span>

                  <span className="text-xl font-bold text-gray-900">
                    ₹{total.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </div>

            <Link
              to="/checkout"
              className="mt-6 block w-full rounded-xl bg-pink-600 px-6 py-4 text-center font-semibold text-white transition hover:bg-pink-700"
            >
              Proceed to Checkout
            </Link>

            <Link
              to="/products"
              className="mt-4 block text-center text-sm font-medium text-gray-500 hover:text-pink-600"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cart;