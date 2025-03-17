package net.dedicated_ip.app

import android.os.Bundle
import android.util.Log
import com.stripe.android.paymentsheet.PaymentSheet
import com.stripe.android.paymentsheet.PaymentSheetResult
import io.flutter.embedding.android.FlutterFragmentActivity

class StripeCheckoutActivity : FlutterFragmentActivity() {
    private lateinit var paymentSheet: PaymentSheet
    private var clientSecret: String? = null
    private var productId: String? = null
    private var productPrice: String? = null
    private var productTitle: String? = null
    private var merchantDisplayName: String? = null

    companion object {
        const val EXTRA_CLIENT_SECRET = "clientSecret"
        const val EXTRA_PRODUCT_ID = "productId"
        const val EXTRA_PRODUCT_PRICE = "productPrice"
        const val EXTRA_PRODUCT_TITLE = "productTitle"
        const val EXTRA_MERCHANT_NAME = "merchantDisplayName"
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        paymentSheet = PaymentSheet(this, ::onPaymentSheetResult)

        clientSecret = intent.getStringExtra(EXTRA_CLIENT_SECRET)
        productId = intent.getStringExtra(EXTRA_PRODUCT_ID)
        productPrice = intent.getStringExtra(EXTRA_PRODUCT_PRICE)
        productTitle = intent.getStringExtra(EXTRA_PRODUCT_TITLE)
        merchantDisplayName = intent.getStringExtra(EXTRA_MERCHANT_NAME)

        if (clientSecret == null) {
            sendResultBack("error", "Client Secret is null")
            finish()
            return
        }

        presentPaymentSheet()
    }

    private fun presentPaymentSheet() {
        val configuration = PaymentSheet.Configuration(
            merchantDisplayName = merchantDisplayName ?: "Dedicated-IP",
        )
        paymentSheet.presentWithPaymentIntent(clientSecret!!, configuration)
    }

    private fun sendResultBack(status: String, message: String){
        try {
            val mainActivity = this@StripeCheckoutActivity
            if (mainActivity is MainActivity) {
                (mainActivity as MainActivity).sendResultToFlutter(status, message)
            } else {
                Log.e("StripeCheckoutActivity", "Hosting activity is not MainActivity!")
            }
        } catch (e: ClassCastException) {
            Log.e("StripeCheckoutActivity", "Hosting activity is not MainActivity!", e)
        } catch (e: IllegalStateException) {
            Log.e("StripeCheckoutActivity", "Fragment not attached to an activity!", e)
        }
    }

    private fun onPaymentSheetResult(paymentSheetResult: PaymentSheetResult) {
        when (paymentSheetResult) {
            is PaymentSheetResult.Canceled -> {
                Log.d("StripeCheckoutActivity", "Payment Canceled")
                sendResultBack("cancelled", "Payment cancelled")
            }
            is PaymentSheetResult.Failed -> {
                Log.e("StripeCheckoutActivity", "Payment Failed", paymentSheetResult.error)
                sendResultBack("failed", paymentSheetResult.error.localizedMessage ?: "Unknown Error")
            }
            is PaymentSheetResult.Completed -> {
                Log.d("StripeCheckoutActivity", "Payment Completed")
                sendResultBack("completed", "Payment successful")

            }
        }
        finish()
    }
}
