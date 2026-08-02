import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-pink-50 to-rose-100">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-10 px-6 py-16 lg:flex-row">

        {/* Left Side */}
        <div className="max-w-xl">

          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-pink-600">
            New Collection 2026
          </p>

          <h1 className="mb-6 text-5xl font-extrabold leading-tight text-gray-900">
            Timeless Fashion
            <br />
            for Every Woman
          </h1>

          <p className="mb-8 text-lg text-gray-600">
            Explore our exclusive collection of sarees, kurtis,
            lehengas, gowns, western wear and trending jewellery.
          </p>

          <div className="flex gap-4">

            <button className="rounded-full bg-pink-600 px-8 py-3 font-semibold text-white transition hover:bg-pink-700">
              Shop Now
            </button>

            <button className="flex items-center gap-2 rounded-full border border-pink-600 px-8 py-3 font-semibold text-pink-600 transition hover:bg-pink-50">
              Explore
              <ArrowRight size={18} />
            </button>

          </div>

        </div>

        {/* Right Side */}
        <div>

          <img
            src="/images/hero/h1.jfif"
            alt="Fashion Model"
            className="w-[500px] rounded-3xl shadow-2xl"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;