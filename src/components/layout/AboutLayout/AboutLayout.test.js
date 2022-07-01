import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AboutLayout from './AboutLayout';

describe('Component AboutLayout', () => {
  it('should render without crashing', () => {
    render(<AboutLayout action={() => { }} />);
  });
});
