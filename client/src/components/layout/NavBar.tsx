import {
  Heart,
  ShoppingCart,
  Search,
  User,
  Menu,
  ChevronDown,
} from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Navbar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/images/logo/logo_image.png"
            alt="Lunera"
            className="h-12 w-12 rounded-full object-cover"
          />

          <div>
            <h1 className="text-2xl font-bold text-pink-600">
              Lunera
            </h1>
            <p className="text-xs text-gray-500">
              Fashion & Jewellery
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="hidden lg:flex w-[420px]">
          <div className="flex w-full items-center rounded-full border px-4 py-2">
            <Search size={18} className="text-gray-400" />

            <input
              type="text"
              placeholder="Search products..."
              className="ml-3 w-full outline-none"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">

          <button className="hidden md:flex items-center gap-2 text-sm">
            INR
            <ChevronDown size={16} />
          </button>

          <Heart
            className="cursor-pointer hover:text-pink-600"
            size={22}
          />

          <ShoppingCart
            className="cursor-pointer hover:text-pink-600"
            size={22}
          />

          <User
            className="cursor-pointer hover:text-pink-600"
            size={22}
          />

          <Menu
            className="cursor-pointer lg:hidden"
            size={26}
          />

        </div>
      </div>

      {/* Navigation */}
      <nav className="hidden lg:block border-t">
        <div className="mx-auto flex max-w-7xl justify-center gap-10 py-4 font-medium">

          <a href="#">Home</a>
          <a href="#">Sarees</a>
          <a href="#">Kurtis</a>
          <a href="#">Lehengas</a>
          <a href="#">Western Wear</a>
          <a href="#">Jewellery</a>
          <a href="#">New Arrivals</a>
          <a href="#">Sale</a>

        </div>
      </nav>

    </header>
  );
}

export default Navbar;