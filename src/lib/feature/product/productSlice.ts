import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type productType = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
};

type CreateProductType = {
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: string[];
};

type ResponseType = {
  item: productType[];
  singleProduct: productType | null;
  loading: boolean;
};
// initialstate
const initialState: ResponseType = {
  item: [],
  singleProduct: null,
  loading: false,
};
// fetch data
export const getProductData = createAsyncThunk(
  "product/fetchProduct",
  async () => {
    const response = await fetch(" https://api.escuelajs.co/api/v1/products");
    return response.json();
  },
);

export const getSingleProduct = createAsyncThunk(
  "product/fetchSingleProduct",
  async (id: number) => {
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/products/${id}`,
    );
    return response.json();
  },
);

// create slice
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProductData.fulfilled, (state, action) => {
      state.loading = false;
      state.item = action.payload;
    });
    builder.addCase(getSingleProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSingleProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.singleProduct = action.payload;
    });
  },
});

export default productSlice.reducer;
