import { CurrencyCode } from '../src/types/currencies'
import { getCurrencySymbol } from '../src/utils/currency-symbol.util'

describe('getCurrencySymbol', () => {
  it('returns the correct currency symbol for a valid currency code', () => {
    const validCurrencyCode: CurrencyCode = 'USD'
    const symbol = getCurrencySymbol(validCurrencyCode)

    // Replace 'expectedSymbol' with the expected currency symbol for 'USD'
    const expectedSymbol = '$'

    expect(symbol).toBe(expectedSymbol)
  })

  it('returns an empty string for an invalid currency code', () => {
    const noCurrencySumbol: CurrencyCode = 'RSD' // An invalid currency code
    const symbol = getCurrencySymbol(noCurrencySumbol)

    expect(symbol).toBe('RSD')
  })
})
