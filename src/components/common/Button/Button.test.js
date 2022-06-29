import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Component Button', () => {
  it('should render without crashing', () => {
    render(<Button action={() => { }} />);
  });
});
