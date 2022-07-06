import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SectionTitle from './SectionTitle';

describe('Component SectionTitle', () => {
  it('should render without crashing', () => {
    render(<SectionTitle action={() => { }} />);
  });
});
