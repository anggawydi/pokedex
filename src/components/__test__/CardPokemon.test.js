import { cleanup, render, fireEvent, screen } from '@testing-library/react';
import CardPokemon from '../CardPokemon';

const mockData = {
  id: 1,
  name: 'name',
  image:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
};

describe('CardPokemon', () => {
  afterEach(cleanup);

  it('should be render without error', () => {
    render(<CardPokemon data={mockData} />);
  });

  it('should be navigate when clicked', () => {
    const mockFn = jest.fn();
    render(<CardPokemon data={mockData} onClick={mockFn} />);
    const containerElement = screen.getByTestId('card-poke');
    fireEvent.click(containerElement);
    expect(mockFn).toHaveBeenCalled();
  });
});
