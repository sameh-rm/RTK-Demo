import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/data/'
  }),
  endpoints: (builder) => ({
    products: builder.query<Product[], Product[]>({
      query: () => '/products.json'
    })
  })
});

export const { useProductsQuery } = productsApi;
