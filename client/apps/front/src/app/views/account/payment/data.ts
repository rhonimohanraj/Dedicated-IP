const mastercard = 'assets/img/account/mastercard.svg'
const visa = 'assets/img/account/visa.svg'
const amex = 'assets/img/account/amex.svg'
const bitcoin = 'assets/img/account/bitcoin.svg'

export type PaymentCardType = {
  image: string
  name: string
  cardLastDigit?: number
  lastSecretBit?: string
  isPrimary: boolean
  validTill?: string
}

export const paymentCardData: PaymentCardType[] = [
  {
    image: mastercard,
    name: 'mastercard',
    cardLastDigit: 4298,
    isPrimary: true,
    validTill: '09/26',
  },
  {
    image: visa,
    name: 'visa',
    cardLastDigit: 9276,
    isPrimary: false,
    validTill: '11/25',
  },
  {
    image: amex,
    name: 'amex',
    cardLastDigit: 3854,
    isPrimary: false,
    validTill: '03/26',
  },
]

export const paymentCryptoData: PaymentCardType[] = [
  {
    image: bitcoin,
    name: 'Bitcoin (BTC)',
    lastSecretBit: 'UNky',
    isPrimary: false,
  },
]
