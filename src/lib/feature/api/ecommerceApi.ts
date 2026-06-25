"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// product type
export type Products = {
  id: number;
  title: string;
  slug: string;
  price: string;
  description: string;
  images: string;
};
export const ecommerceApi = createApi({
  reducerPath: "ecommerceApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (builder) => ({
    // getALlProduct
    getProducts: builder.query<Products[], void>({
      query: () => "/api/v1/products",
    }),
    // getSigle product
    getProductById: builder.query<Products, number>({
      query: (id) => `/api/v1/products/${id}`,
    }),
    // create Product
    createProduct: builder.mutation<
      Products,
      { newProduct: object; accessToken: string }
    >({
      query: ({ newProduct, accessToken }) => ({
        url: "/api/products",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer${accessToken}`,
        },
        body: newProduct,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useCreateProductMutation,
} = ecommerceApi;
