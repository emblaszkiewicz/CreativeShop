import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';

describe('Component Login', () => {
  it('should render without crashing', () => {
    render(<Login action={() => { }} />);
  });
});
