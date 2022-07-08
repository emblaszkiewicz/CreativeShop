import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Cart from './Cart';

describe('Component Cart', () => {
  it('should render without crashing', () => {
    render(<Cart action={() => { }} />);
  });
});
