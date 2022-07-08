import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SingleProduct from './SingleProduct';

describe('Component SingleProduct', () => {
  it('should render without crashing', () => {
    render(<SingleProduct action={() => { }} />);
  });
});
