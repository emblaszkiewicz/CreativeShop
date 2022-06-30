import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';

describe('Component Form', () => {
  it('should render without crashing', () => {
    render(<Form action={() => { }} />);
  });
});
