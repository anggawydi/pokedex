import { cleanup, render, screen } from '@testing-library/react';
import EmptyData from '../EmptyData';

describe('EmptyData', () => {
  afterEach(cleanup);

  it('should be render message', () => {
    render(<EmptyData message="data error" />);
    const messageElement = screen.getByText(/data error/i);
    expect(messageElement).toBeInTheDocument();
  });
});
