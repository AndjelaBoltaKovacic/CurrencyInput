import { render, fireEvent, queryByAttribute } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CurrencyInput from '../src/index'

const mockSetState = jest.fn()

describe('CurrencyInput', () => {
  it('renders without crashing', () => {
    render(<CurrencyInput onChange={mockSetState} type='text' />)
  })

  it('displays the default value correctly', () => {
    const { getByDisplayValue } = render(<CurrencyInput onChange={mockSetState} defaultValue='1234.56' type='text' />)
    const inputElement = getByDisplayValue('1,234.56')
    expect(inputElement).toBeInTheDocument()
  })

  it('calls the onChange function with the correct value when input changes', () => {
    const mockOnChange = jest.fn((value) => {
      mockSetState({ value })
    })

    const component = render(<CurrencyInput onChange={mockOnChange} type='text' />)
    const getById = queryByAttribute.bind(null, 'id')
    const inputElement = getById(component.container, 'currency-input')
    expect(inputElement).toBeInTheDocument()

    inputElement && fireEvent.change(inputElement, { target: { value: '1234.56' } })

    expect(mockOnChange).toHaveBeenCalledWith('1,234.56')
    expect(mockSetState).toHaveBeenCalledWith({ value: '1,234.56' })
  })

  it('formats the input value correctly with custom styles', () => {
    const component = render(
      <CurrencyInput
        onChange={mockSetState}
        defaultValue='789.12'
        type='text'
        customStyles={{ color: 'red', fontSize: '16px' }}
      />,
    )
    const getById = queryByAttribute.bind(null, 'class')
    const inputContainer = getById(component.container, 'inputContainer')
    expect(inputContainer).toBeInTheDocument()
    expect(inputContainer).toHaveStyle('color: red')
    expect(inputContainer).toHaveStyle('font-size: 16px')
  })

  it('renders the currency symbol when currencyCode is provided', () => {
    const { getByText } = render(
      <CurrencyInput onChange={mockSetState} defaultValue='1234.56' type='text' currencyCode='USD' />,
    )
    const currencySymbolElement = getByText('$')

    expect(currencySymbolElement).toBeInTheDocument()
  })
})
