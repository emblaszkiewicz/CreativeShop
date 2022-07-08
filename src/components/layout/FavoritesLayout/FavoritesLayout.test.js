import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FavoritesLayout from './FavoritesLayout';

describe('Component FavoritesLayout', () => {
  it('should render without crashing', () => {
    render(<FavoritesLayout action={() => { }} />);
  });
});
