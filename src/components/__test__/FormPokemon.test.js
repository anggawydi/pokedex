import { cleanup, render, fireEvent, screen } from '@testing-library/react';
import FormPokemon from '../FormPokemon';

const mockMyPokemon = [
  {
    id: 1,
    name: 'name',
    nickname: 'nickname',
    types: [{ type: { name: 'name' } }],
  },
];

const mockFn = jest.fn();

describe('CardPokemon', () => {
  afterEach(cleanup);

  it('should be call func from parent', () => {
    render(<FormPokemon handleSubmit={mockFn} myPokemon={mockMyPokemon} />);
    const inputElement = screen.getByPlaceholderText(/Give your pokemon name/i);
    fireEvent.click(inputElement);
    fireEvent.change(inputElement, { target: { value: 'Poke' } });
    const buttonElement = screen.getByRole(/button/i);
    fireEvent.click(buttonElement);
    expect(mockFn).toHaveBeenCalled();
  });

  it('should render error message when user input character < 3 or > 10', () => {
    render(<FormPokemon myPokemon={mockMyPokemon} />);
    const inputElement = screen.getByPlaceholderText(/Give your pokemon name/i);
    fireEvent.click(inputElement);
    fireEvent.change(inputElement, { target: { value: 'ddsadasdsadss' } });
    const buttonElement = screen.getByRole(/button/i);
    fireEvent.click(buttonElement);
    const errorElement = screen.getByText(/name must be 3 - 10 character/i);
    expect(errorElement).toBeInTheDocument();
  });
});
