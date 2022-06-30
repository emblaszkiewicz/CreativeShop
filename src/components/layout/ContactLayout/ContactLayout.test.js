import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactLayout from './ContactLayout';

describe('Component ContactLayout', () => {
  it('should render without crashing', () => {
    render(<ContactLayout action={() => { }} />);
  });
});
