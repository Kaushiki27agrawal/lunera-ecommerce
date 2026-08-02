type CategoryCardProps = {
  name: string;
  image: string;
};

function CategoryCard({ name, image }: CategoryCardProps) {
  return (
    <div className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <img
        src={image}
        alt={name}
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
      />

      <div className="p-5 text-center">
        <h3 className="text-xl font-semibold text-gray-800">
          {name}
        </h3>
      </div>
    </div>
  );
}

export default CategoryCard;