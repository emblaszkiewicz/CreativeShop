import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NavBar from './NavBar';

describe('Component NavBar', () => {
  it('should render without crashing', () => {
    render(<NavBar action={() => { }} />);
  });
});
