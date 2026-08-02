import ProductCard from "@/components/common/ProductCard";
import { products } from "@/constants/products";

function FeaturedProducts() {
  return (
    <section className="bg-pink-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-4xl font-bold">
          Featured Collection
        </h2>

        <p className="mb-12 text-center text-gray-500">
          Explore our best-selling products.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              oldPrice={product.oldPrice}
              rating={product.rating}
              discount={product.discount}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;