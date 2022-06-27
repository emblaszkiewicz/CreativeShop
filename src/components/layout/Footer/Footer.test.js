import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Footer from './Footer';

describe('Component Footer', () => {
  it('should render without crashing', () => {
    render(<Footer action={() => { }} />);
  });
});
