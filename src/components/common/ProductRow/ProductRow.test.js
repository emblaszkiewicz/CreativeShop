import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductRow from './ProductRow';

describe('Component ProductRow', () => {
  it('should render without crashing', () => {
    render(<ProductRow action={() => { }} />);
  });
});
