import '../src/setupTests';
import { screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '@/utils/unittest/renderWithProvider';
import CartPage from '@/components/pages/cart/CartPage';
import { setupStore } from '@/redux/store';
import { addCartItem, removeCartItem } from '@/redux/slices/cart.slice';

const testProduct: Product = {
  name: 'Test Product',
  description:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit voluptates enim, neque molestias quas at praesentium doloribus facere voluptate, beatae delectus iste explicabo laboriosam numquam ullam atque tempora accusantium quae?',
  imageUrl:
    '/images/wd-elements-portable-1-2tb-front.png.wdthumb.1280.1280.webp',
  price: 411,
  slug: 'test-prorduct',
  id: 1
};

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
