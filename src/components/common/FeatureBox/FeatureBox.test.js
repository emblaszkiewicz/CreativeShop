import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FeatureBox from './FeatureBox';

describe('Component FeatureBox', () => {
  it('should render without crashing', () => {
    render(<FeatureBox action={() => { }} />);
  });
});
