import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WorkerBox from './WorkerBox';

describe('Component WorkerBox', () => {
  it('should render without crashing', () => {
    render(<WorkerBox action={() => { }} />);
  });
});
