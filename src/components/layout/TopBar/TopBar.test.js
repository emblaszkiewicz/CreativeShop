import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TopBar from './TopBar';

describe('Component TopBar', () => {
  it('should render without crashing', () => {
    render(<TopBar action={() => { }} />);
  });
});
