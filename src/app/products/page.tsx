"use client";
import { getProductData } from "@/src/lib/feature/product/productSlice";
import { useAppDispatch, useAppSelector } from "@/src/lib/hooks";
import { useEffect } from "react";

export default function ProductPage() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProductData());
  }, [getProductData]);
  const { item, loading } = useAppSelector((state) => state.product);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {item.map((product) => (
        <div
          key={product.id}
          className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
        >
          {/* Image */}
          <div className="relative overflow-hidden bg-gray-50 aspect-square">
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 p-4 gap-2">
            <h2 className="text-gray-900 font-semibold text-base leading-snug line-clamp-2">
              {product.title}
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1">
              {product.description}
            </p>

            {/* Action */}
            <button className="mt-3 w-full py-2 px-4 rounded-xl bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 active:scale-95 transition-all duration-150">
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
