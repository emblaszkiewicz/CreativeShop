import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import OpinionsBar from './OpinionsBar';

describe('Component OpinionsBar', () => {
  it('should render without crashing', () => {
    render(<OpinionsBar action={() => { }} />);
  });
});
