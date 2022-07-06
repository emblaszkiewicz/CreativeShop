import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductBox from './ProductBox';

describe('Component ProductBox', () => {
  it('should render without crashing', () => {
    render(<ProductBox action={() => { }} />);
  });
});
