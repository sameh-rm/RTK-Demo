import React from 'react';
import { waitFor } from '@testing-library/react';
// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from '@/utils/unittest/renderWithProvider';
import ShopPage from '@/app/page';
import { server } from '@/utils/unittest/mock';
import 'whatwg-fetch';



// We use msw to intercept the network request during the test,
// and return the response 'John Smith' after 150ms
// when receiving a get request to the `/api/user` endpoint


// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe('Shop Not Loaded', () => {
  it('Shop Page Loading Success', async () => {
    const { getByText } = renderWithProviders(await waitFor(() => <ShopPage />));

    expect(getByText('No products found.')).toBeInTheDocument();
  });
});

test('Shop is Loaded', async () => {
  const { getByText } = renderWithProviders(await waitFor(() => <ShopPage />));

  // should show no user initially, and not be fetching a user
    expect(getByText('Add to Cart')).toBeInTheDocument();
});

