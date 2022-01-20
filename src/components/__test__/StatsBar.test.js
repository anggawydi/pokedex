import { cleanup, render, screen } from '@testing-library/react';
import StatsBar from '../StatsBar';

describe('StatsBar', () => {
  afterEach(cleanup);

  it('should be render name', () => {
    render(<StatsBar name="attack" />);
    const nameElement = screen.getByText(/attack/i);
    expect(nameElement).toBeInTheDocument();
  });
});
