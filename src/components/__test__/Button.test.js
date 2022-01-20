import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button';

describe('Button', () => {
  afterEach(cleanup);

  it('should render children', () => {
    render(<Button>add</Button>);
    const buttonElement = screen.getByText(/add/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it('should called function', () => {
    const mockFn = jest.fn();
    render(<Button onClick={mockFn}>add</Button>);
    const buttonElement = screen.getByText(/add/i);
    fireEvent.click(buttonElement)
    expect(mockFn).toHaveBeenCalled();
  });
});
