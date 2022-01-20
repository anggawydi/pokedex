import { cleanup, render, screen } from '@testing-library/react';
import GridWithTitle from '../GridWithTitle';

describe('GridWithTitle', () => {
  afterEach(cleanup);

  it('should be render message', () => {
    render(<GridWithTitle title="Stat" />);
    const titleElement = screen.getByText(/Stat/i);
    expect(titleElement).toBeInTheDocument();
  });
});
