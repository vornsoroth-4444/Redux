"use client";
import { ecommerceApi } from "../api";

// product type
export type Category = {
  id: number;
  name: string;
  slug: string;
  image: string;
};
export const categorApi = ecommerceApi.injectEndpoints({
  endpoints: (builder) => ({
    // getALlcategory
    getCategories: builder.query<Category[], void>({
      query: () => "/api/v1/categories",
    }),
  }),
});

export const { useGetCategoriesQuery } = categorApi;
