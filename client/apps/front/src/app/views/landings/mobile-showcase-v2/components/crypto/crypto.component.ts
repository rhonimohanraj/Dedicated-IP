import { Component } from '@angular/core'
import { cryptocurrencies } from '../../data'
import { currency } from 'src/app/states/constants'
import { CommonModule } from '@angular/common'
import type { CryptoCurrencyType } from '../../type'

@Component({
  selector: 'mobile-showcase-v2-crypto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crypto.component.html',
  styles: ``,
})
export class CryptoComponent {
  selectedCurrency = currency
  cryptoData: CryptoCurrencyType[] = cryptocurrencies
}
