import { CurrencyCode } from '../../types/currencies'
import { getCurrencySymbol } from '../currency-symbol.util'

describe('getCurrencySymbol', () => {
  it('returns the correct currency symbol for a valid currency code', () => {
    const validCurrencyCode: CurrencyCode = 'USD'
    const symbol = getCurrencySymbol(validCurrencyCode)

    const expectedSymbol = '$'

    expect(symbol).toBe(expectedSymbol)
  })

  it('returns an empty string for an invalid currency code', () => {
    const noCurrencySumbol: CurrencyCode = 'RSD'
    const symbol = getCurrencySymbol(noCurrencySumbol)

    expect(symbol).toBe('RSD')
  })
})
