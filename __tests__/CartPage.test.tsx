import '../src/setupTests';
import { screen, waitFor } from '@testing-library/react';
import {
  renderWithProviders,
  testProduct
} from '@/utils/unittest/renderWithProvider';
import CartPage from '@/components/pages/cart/CartPage';
import { setupStore } from '@/redux/store';
import { addCartItem, removeCartItem } from '@/redux/slices/cart.slice';

describe('test Cart Page', () => {
  const store = setupStore();

  it('test add to cart', () => {
    store.dispatch(addCartItem(testProduct));
    expect(store.getState().cart.count).toEqual(1);
  });

  test('test load cartItems', async () => {
    renderWithProviders(await waitFor(() => <CartPage />), {
      store
    });
    expect(screen.getByText(testProduct.name)).toBeInTheDocument();
  });

  it('test add to cart', () => {
    store.dispatch(removeCartItem({ ...testProduct, quantity: 1 }));
    expect(store.getState().cart.count).toEqual(0);
  });
});
