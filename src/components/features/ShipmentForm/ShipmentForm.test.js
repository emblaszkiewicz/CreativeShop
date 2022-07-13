import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ShipmentForm from './ShipmentForm';

describe('Component ShipmentForm', () => {
  it('should render without crashing', () => {
    render(<ShipmentForm action={() => { }} />);
  });
});
