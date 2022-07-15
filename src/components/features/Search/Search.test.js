import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from './Search';

describe('Component Search', () => {
  it('should render without crashing', () => {
    render(<Search action={() => { }} />);
  });
});
