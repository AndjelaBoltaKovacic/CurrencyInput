export const formatNumberInputWithDecimals = (value: string) => {
  if (!value) return '0.00'

  const digitsOnly = value.replace(/[^\d]/g, '').replace(/^0+/, '')

  if (digitsOnly.length < 3) {
    return '0.' + '0'.repeat(2 - digitsOnly.length) + digitsOnly
  }
  const integerPart = digitsOnly.slice(0, -2)
  const fractionalPart = digitsOnly.slice(-2)

  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  const formattedValue = formattedInteger + '.' + fractionalPart

  return formattedValue
}

export const getFloat = (value: string) => parseFloat(value.replace(/,/g, ''))

export const formatValue = (value: string, type: 'text' | 'number') => (type === 'number' ? getFloat(value) : value)

export const formatDefaultValue = (defaultValue: string | number) =>
  defaultValue
    ? formatNumberInputWithDecimals(typeof defaultValue === 'number' ? defaultValue?.toString() : defaultValue)
    : ''
