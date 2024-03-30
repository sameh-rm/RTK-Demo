import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type ProductStateType = {
  list: Product[];
  tempList: Product[];
  filters: FilterOptions;
};
// Define the initial state for the slice
const initialState: ProductStateType = {
  list: [],
  tempList: [],
  filters: {
    maxPrice: 0,
    minPrice: 0,
    productName: ''
  }
};

export const productsReducer = createSlice({
  // Name of the slice
  name: 'products',
  initialState,
  // Functions that update the initialState are written inside the reducers object
  reducers: {
    // This function updates the board name when called
    setProducts: (products, action: PayloadAction<Product[]>) => {
      products.tempList = action.payload;
      products.list = action.payload;
    },

    setFilters: (products, action: PayloadAction<FilterOptions>) => {
      products.filters = action.payload;
    },
    sortProducts: (products, action: PayloadAction<'asc' | 'desc'>) => {
      switch (action.payload) {
        case 'asc':
          products.list = products.list.sort((a, b) => a.price - b.price);
          break;
        case 'desc':
          products.list = products.list.sort((a, b) => b.price - a.price);
          break;
      }
    },
    getFilteredProducts: (products, action: PayloadAction<FilterOptions>) => {
      products.list = products.tempList;
      if (action.payload.productName) {
        products.list = products.list?.filter((product) =>
          product.name
            .toLowerCase()
            .includes(action?.payload?.productName.toLowerCase())
        );
      }

      if (action.payload.maxPrice > 0) {
        products.list = products.list?.filter(
          (product) =>
            product.price <= action.payload.maxPrice &&
            product.price >= action.payload.minPrice
        );
      } else {
        products.list = products.list?.filter(
          (product) => product.price >= action.payload.minPrice
        );
      }
    }
  }
});

// Export the functions defined inside the reducers here
export const { setProducts, getFilteredProducts, setFilters, sortProducts } =
  productsReducer.actions;

// Selector function to retrieve the current board name from the state
export const getFiltersSelector = (state: RootState) => state.products.filters;
export const getProductsSelector = (state: RootState) => state.products.list;
export const getProductBySlug = (productSlug: string) => (state: RootState) =>
  state.products.list.find((p) => p.slug === productSlug);

// Export the reducer for use in the Redux store
export default productsReducer.reducer;
