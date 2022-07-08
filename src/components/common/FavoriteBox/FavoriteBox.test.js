import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FavoriteBox from './FavoriteBox';

describe('Component FavoriteBox', () => {
  it('should render without crashing', () => {
    render(<FavoriteBox action={() => { }} />);
  });
});
