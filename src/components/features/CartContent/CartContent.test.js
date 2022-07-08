import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CartContent from './CartContent';

describe('Component CartContent', () => {
  it('should render without crashing', () => {
    render(<CartContent action={() => { }} />);
  });
});
