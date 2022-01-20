import { cleanup, render, fireEvent, screen } from '@testing-library/react';
import Select from '../Select';

describe('CardPokemon', () => {
  afterEach(cleanup);

  it('should be call func from parent', () => {
    const mockFn = jest.fn();
    render(
      <Select setValue={mockFn} value="">
        <option value="test">test</option>
      </Select>
    );
    const selectElement = screen.getByTestId(/select-test/i);
    fireEvent.change(selectElement, { target: { value: 'test' } });
    expect(mockFn).toHaveBeenCalled();
  });
});
