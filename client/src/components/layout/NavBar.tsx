import { Link, NavLink } from "react-router-dom";
import { useCart } from "@/context/CartContext";

function NavBar() {
  const { getCartCount } = useCart();

  const cartCount = getCartCount();

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition ${
      isActive
        ? "text-pink-600"
        : "text-gray-700 hover:text-pink-600"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide text-pink-600"
        >
          LUNERA
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/products" className={navLinkClass}>
            Products
          </NavLink>

          <NavLink to="/wishlist" className={navLinkClass}>
            Wishlist
          </NavLink>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Login */}
          <Link
            to="/login"
            className="hidden text-sm font-medium text-gray-700 transition hover:text-pink-600 sm:block"
          >
            Login
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-pink-500 hover:text-pink-600"
          >
            <span className="text-lg">🛒</span>

            <span>Cart</span>

            {cartCount > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-pink-600 px-1 text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default NavBar;