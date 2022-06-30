import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from './Home';

describe('Component Home', () => {
  it('should render without crashing', () => {
    render(<Home action={() => { }} />);
  });
});
