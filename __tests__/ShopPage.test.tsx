/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import Page from '@/app/page';
import { renderWithProviders } from '@/utils/test/renderWithProvider';

describe('Home', () => {
  it('renders a heading', () => {
    renderWithProviders(<Page />);
    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i
    });

    expect(heading).toBeInTheDocument();
  });
});
