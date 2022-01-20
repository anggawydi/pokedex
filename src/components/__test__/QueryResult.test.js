import { render, screen, cleanup } from '@testing-library/react';
import QueryResult from '../QueryResult';

describe('Query Result', () => {
  afterEach(cleanup);

  it('renders loading state', async () => {
    render(<QueryResult loading={true} />);
    const loadingElement = screen.getByTestId(/spinner/i);
    expect(loadingElement).toBeInTheDocument();
  });

  it('renders Error message', async () => {
    render(<QueryResult error={new Error('error')} />);
    const errorElement = screen.getByText(/ERROR: error/i);
    expect(errorElement).toBeInTheDocument();
  });

  it('renders No Data message', async () => {
    render(<QueryResult loading={false} />);
    const emptyElement = screen.getByText(/Data empty.../i);
    expect(emptyElement).toBeInTheDocument();
  });
});
