import CategoryCard from "@/components/common/CategoryCard";
import { categories } from "@/constants/categories";

function Categories() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-4 text-center text-4xl font-bold">
          Shop by Category
        </h2>

        <p className="mb-12 text-center text-gray-500">
          Discover your favourite fashion collection.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              name={category.name}
              image={category.image}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Categories;