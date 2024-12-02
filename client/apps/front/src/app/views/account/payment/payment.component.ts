import { Component } from '@angular/core'
import { paymentCardData, paymentCryptoData } from './data'

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [],
  templateUrl: './payment.component.html',
  styles: ``,
})
export class PaymentComponent {
  paymentCardData = paymentCardData
  paymentCryptoData = paymentCryptoData
}
