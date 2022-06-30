import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from './Contact';

describe('Component Contact', () => {
  it('should render without crashing', () => {
    render(<Contact action={() => { }} />);
  });
});
