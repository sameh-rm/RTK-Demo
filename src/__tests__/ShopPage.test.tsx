/**
 * @jest-environment jsdom
 */
import { render, waitFor } from '@testing-library/react';
import Page from '@/app/page';
import { renderWithProviders } from '@/utils/test/renderWithProvider';
import 'whatwg-fetch';
import { StoreProvicder } from '@/components/redux/StoreProvicder';

describe('Shop', () => {
  it('Shop Page Loading Success', async () => {
    const { getByText } = renderWithProviders(await waitFor(() => <Page />));

    expect(getByText('No products found.')).toBeInTheDocument();
  });
});
