import '../src/setupTests';
import { renderWithProviders } from '@/utils/unittest/renderWithProvider';
import ProductCard from '@/components/products/ProductCard';

describe('test ProductCard', () => {
  const { container, getByText, getByTestId } = renderWithProviders(
    <ProductCard
      description="test"
      id={1}
      imageUrl="/images/wd-elements-portable-1-2tb-front.png.wdthumb.1280.1280.webp"
      name="Test Product"
      price={22}
      slug="test-slug"
    />
  );
  it('check product card', () => {
    expect(getByText('Test Product')).toBeInTheDocument();
  });
});
