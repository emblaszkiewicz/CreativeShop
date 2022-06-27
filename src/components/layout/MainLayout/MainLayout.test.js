import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MainLayout from './MainLayout';

describe('Component MainLayout', () => {
  it('should render without crashing', () => {
    render(<MainLayout action={() => { }} />);
  });
});
