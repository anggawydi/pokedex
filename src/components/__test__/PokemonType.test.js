import { cleanup, render, screen } from '@testing-library/react';
import PokemonType from '../PokemonType';

describe('PokemonType', () => {
  afterEach(cleanup);

  it('should be render name', () => {
    render(<PokemonType type="water" />);
    const childrenElement = screen.getByText(/water/i);
    expect(childrenElement).toBeInTheDocument();
  });
});
