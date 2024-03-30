import '../src/setupTests';
import {  screen, waitFor } from '@testing-library/react';
import {
  renderWithProviders
} from '@/utils/unittest/renderWithProvider';
import ShopPage from '@/components/pages/shop/ShopPage';

describe('test Shop Page', () => {
  test('load Products', async () => {
    renderWithProviders(await waitFor(() => <ShopPage />));
    await waitFor(() => {
      return expect(
        screen.getByText(
          'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
        )
      ).toBeInTheDocument();
    });
  });
});
