"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/src/lib/hooks";
import { getSingleProduct } from "@/src/lib/feature/product/productSlice";

export default function ProductDetailPage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { singleProduct, loading } = useAppSelector((state) => state.product);

  useEffect(() => {
    if (id) {
      dispatch(getSingleProduct(Number(id)));
    }
  }, [id, dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-2xl font-bold">Loading product details...</h1>
      </div>
    );
  }

  if (!singleProduct) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-2xl font-bold text-red-500">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 lg:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden shadow-inner">
            <img
              src={singleProduct.images[0]}
              alt={singleProduct.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {singleProduct.images.slice(1).map((image, index) => (
              <div
                key={index}
                className="aspect-square bg-gray-50 rounded-lg overflow-hidden border border-gray-100"
              >
                <img
                  src={image}
                  alt={`${singleProduct.title} ${index + 2}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {singleProduct.title}
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            {singleProduct.description}
          </p>

          <div className="mt-auto space-y-4">
            <button className="w-full py-4 px-6 rounded-2xl bg-gray-900 text-white text-lg font-semibold hover:bg-gray-800 transition-colors shadow-lg">
              Add to Cart
            </button>
            <button
              onClick={() => window.history.back()}
              className="w-full py-3 px-6 rounded-2xl bg-white text-gray-700 text-base font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              Back to Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
