"use client";
import { useGetCategoriesQuery } from "@/src/redux/services/categoryApi";

export default function CategoryPage() {
  const { data, isLoading, isError } = useGetCategoriesQuery();

  console.log("isloading:", isLoading);
  console.log("isError: ", isError);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>isError...</p>;
  }
  return (
    <div className="  p-6">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            {/* Image */}
            <div className="h-40 w-full overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h1 className="text-lg font-semibold text-gray-800 mb-1">
                {category.name}
              </h1>
              <p className="text-sm text-gray-500">{category.slug}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
