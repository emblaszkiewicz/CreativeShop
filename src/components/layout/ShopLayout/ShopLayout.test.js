import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ShopLayout from './ShopLayout';

describe('Component ShopLayout', () => {
  it('should render without crashing', () => {
    render(<ShopLayout action={() => { }} />);
  });
});
