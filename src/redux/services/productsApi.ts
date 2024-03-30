import { Host } from '@/utils/constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: Host + '/data/'
  }),
  endpoints: (builder) => ({
    products: builder.query<Product[], Product[]>({
      query: () => '/products.json'
    })
  })
});

export const { useProductsQuery } = productsApi;
