import { parseUnits, formatUnits } from 'ethers/lib/utils'

export const currencyPrecisions = {
    'ILS': 2,
    'GBP': 4,
    'SEK': 2
}

export const amountToUnits = (amount, currency) => {
    return parseUnits(amount, currencyPrecisions[currency])
}

export const unitsToAmount = (amount, currency) => {
    return formatUnits(amount, currencyPrecisions[currency])
}
