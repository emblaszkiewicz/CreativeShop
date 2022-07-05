import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Banner from './Banner';

describe('Component Banner', () => {
  it('should render without crashing', () => {
    render(<Banner action={() => { }} />);
  });
});
