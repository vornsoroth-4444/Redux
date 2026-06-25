"use client";
import { ecommerceApi } from "../api";

// product type
export type Product = {
  id: number;
  name: string;
  slug: string;
  images: string;
};
export const productApi = ecommerceApi.injectEndpoints({
  endpoints: (builder) => ({
    // getALlProducts
    getProducts: builder.query<Product[], void>({
      query: () => "/api/v1/products",
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
