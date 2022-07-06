import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductsBar from './ProductsBar';

describe('Component ProductsBar', () => {
  it('should render without crashing', () => {
    render(<ProductsBar action={() => { }} />);
  });
});
