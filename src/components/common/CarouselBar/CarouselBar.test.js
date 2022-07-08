import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CarouselBar from './CarouselBar';

describe('Component CarouselBar', () => {
  it('should render without crashing', () => {
    render(<CarouselBar action={() => { }} />);
  });
});
