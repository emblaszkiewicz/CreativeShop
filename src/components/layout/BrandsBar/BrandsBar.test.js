import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BrandsBar from './BrandsBar';

describe('Component BrandsBar', () => {
  it('should render without crashing', () => {
    render(<BrandsBar action={() => { }} />);
  });
});
