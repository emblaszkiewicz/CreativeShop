import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './Header';

describe('Component Header', () => {
  it('should render without crashing', () => {
    render(<Header action={() => { }} />);
  });
});
