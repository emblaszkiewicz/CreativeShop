import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import About from './About';

describe('Component About', () => {
  it('should render without crashing', () => {
    render(<About action={() => { }} />);
  });
});
