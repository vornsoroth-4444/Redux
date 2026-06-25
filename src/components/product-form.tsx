"use client";
import { useForm } from "react-hook-form";

type ProductFormValues = {
  title: string;
  description: string;
};

export default function ProductForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProductFormValues>({
    defaultValues: {
      title: "",
      description: "",
    },
  });
  // handleSubmit
  function onSubmit(data: ProductFormValues) {
    //logic for submit data to server
    console.log("Product Data: ", data);
    console.log("reset:", reset);
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md space-y-6 m-90"
    >
      {/* Title */}
      <div className="flex flex-col space-y-1">
        <label htmlFor="title" className="text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          id="title"
          type="text"
          placeholder="Enter product title"
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("title", {
            required: "Title is required",
            minLength: {
              value: 10,
              message: "Title must be at least 10 characters",
            },
          })}
        />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}
      </div>

      {/* Description */}
      <div className="flex flex-col space-y-1">
        <label
          htmlFor="description"
          className="text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <input
          id="description"
          type="text"
          placeholder="Enter product description"
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("description", {
            required: "Description is required",
            minLength: {
              value: 10,
              message: "Description must be at least 10 characters",
            },
          })}
        />
        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Creating..." : "Create Product"}
      </button>
    </form>
  );
}
