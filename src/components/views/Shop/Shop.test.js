import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Shop from './Shop';

describe('Component Shop', () => {
  it('should render without crashing', () => {
    render(<Shop action={() => { }} />);
  });
});
