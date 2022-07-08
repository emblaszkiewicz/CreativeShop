import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductPage from './ProductPage';

describe('Component ProductPage', () => {
  it('should render without crashing', () => {
    render(<ProductPage action={() => { }} />);
  });
});
