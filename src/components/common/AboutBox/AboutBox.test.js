import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AboutBox from './AboutBox';

describe('Component AboutBox', () => {
  it('should render without crashing', () => {
    render(<AboutBox action={() => { }} />);
  });
});
