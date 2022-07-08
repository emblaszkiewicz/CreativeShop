import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginHandler from './LoginHandler';

describe('Component LoginHandler', () => {
  it('should render without crashing', () => {
    render(<LoginHandler action={() => { }} />);
  });
});
