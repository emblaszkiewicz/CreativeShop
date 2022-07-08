import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductsContainer from './ProductsContainer';

describe('Component ProductsContainer', () => {
  it('should render without crashing', () => {
    render(<ProductsContainer action={() => { }} />);
  });
});
