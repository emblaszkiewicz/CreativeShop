import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FeatureBar from './FeatureBar';

describe('Component FeatureBar', () => {
  it('should render without crashing', () => {
    render(<FeatureBar action={() => { }} />);
  });
});
