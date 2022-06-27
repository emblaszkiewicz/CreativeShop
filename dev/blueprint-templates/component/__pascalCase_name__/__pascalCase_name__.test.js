import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {{pascalCase name}} from './{{pascalCase name}}';

describe('Component {{pascalCase name}}', () => {
  it('should render without crashing', () => {
    render(<{{pascalCase name}} action={() => { }} />);
  });
});
