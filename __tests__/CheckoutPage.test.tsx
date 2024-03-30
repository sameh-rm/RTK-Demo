import CheckoutPage from '@/components/pages/cart/CheckoutPage';
import '../src/setupTests';
import {
  renderWithProviders,
  testProduct
} from '@/utils/unittest/renderWithProvider';
import { setupStore } from '@/redux/store';
import { addCartItem, createOrder } from '@/redux/slices/cart.slice';
import { waitFor } from '@testing-library/react';

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null
    };
  }
}));

describe('test Checkout Page', () => {
  const store = setupStore({});
  test("test Render Checkout Page", async () => {
    renderWithProviders(await waitFor(() => <CheckoutPage />), {
      store
    });
  });

  it('add Cart Item', () => {
    store.dispatch(addCartItem(testProduct));
    expect(store.getState().cart.count).toEqual(1);
  });

  it('initOrder', () => {
    store.dispatch(createOrder({ paymentId: 'test' }));
    expect(store.getState().cart.count).toEqual(0);
  });
});
