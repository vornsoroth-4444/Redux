"use client";
import { useGetProductsQuery } from "@/src/lib/feature/api/ecommerceApi";

export default function ProductPage() {
  const { data: products = [], isLoading, isError } = useGetProductsQuery();
  if (isLoading) {
    return <p>loading...</p>;
  }
  if (isError) {
    return <p>faild to fetch datas</p>;
  }
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            {/* Image */}
            <div className="h-56 w-full overflow-hidden">
              <img
                src={product.images}
                alt={product.title}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-3">
              <h1 className="text-lg font-semibold text-gray-800 line-clamp-1">
                {product.title}
              </h1>
              <p className="text-sm text-gray-500 line-clamp-3">
                {product.description}
              </p>

              {/* Optional button */}
              <button className="mt-3 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
