import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FilterBox from './FilterBox';

describe('Component FilterBox', () => {
  it('should render without crashing', () => {
    render(<FilterBox action={() => { }} />);
  });
});
