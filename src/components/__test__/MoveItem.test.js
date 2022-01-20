import { cleanup, render, screen } from '@testing-library/react';
import MoveItem from '../MoveItem';

describe('MoveItem', () => {
  afterEach(cleanup);

  it('should be render name', () => {
    render(<MoveItem name="wind" />);
    const childrenElement = screen.getByText(/wind/i);
    expect(childrenElement).toBeInTheDocument();
  });
});
