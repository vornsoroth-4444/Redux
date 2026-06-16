"use client";
import { getProductData } from "@/src/lib/feature/product/productSlice";
import { useAppDispatch, useAppSelector } from "@/src/lib/hooks";
import Link from "next/link";
import { useEffect } from "react";

export default function ProductPage() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProductData());
  }, [getProductData, dispatch]);
  const { item, loading } = useAppSelector((state) => state.product);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Products</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

              {/* Actions */}
              <div className="flex gap-2 mt-3">
                <Link
                  href={`/products/${product.id}`}
                  className="flex-1 py-2 px-4 rounded-xl bg-gray-100 text-gray-900 text-sm font-medium hover:bg-gray-200 active:scale-95 transition-all duration-150 text-center"
                >
                  Detail
                </Link>
                <button className="flex-1 py-2 px-4 rounded-xl bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 active:scale-95 transition-all duration-150">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
