import 'whatwg-fetch';
import '@testing-library/jest-dom';
import { productsApi } from '@/redux/services/productsApi';
import { store } from '@/redux/store';
import { server } from './utils/unittest/mock';

import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();
const data: Product[] = [];
// Establish API mocking before all tests.
beforeAll(() => {
  server.listen();
  fetchMock.mockOnceIf('/data/products.json', () =>
    Promise.resolve({
      status: 200,
      body: JSON.stringify(data)
    })
  );
});

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => {
  server.resetHandlers();
  // This is the solution to clear RTK Query cache after each test
  store.dispatch(productsApi.util.resetApiState());
});

// Clean up after the tests are finished.
afterAll(() => server.close());
