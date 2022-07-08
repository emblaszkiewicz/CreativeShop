import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Favorites from './Favorites';

describe('Component Favorites', () => {
  it('should render without crashing', () => {
    render(<Favorites action={() => { }} />);
  });
});
