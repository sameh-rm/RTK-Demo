import '../src/setupTests';
import { renderWithProviders } from '@/utils/unittest/renderWithProvider';
import ProductDetailsPage from '@/components/pages/shop/ProductDetails';

describe('test ProductCard', () => {
  const { getByText } = renderWithProviders(
    <ProductDetailsPage slug="wd-2tb-elements-portable-external-hard-drive-usb-30" />
  );
  it('check product card', () => {
    expect(
      getByText('WD 2TB Elements Portable External Hard Drive - USB 3.0')
    ).toBeInTheDocument();
  });
});
