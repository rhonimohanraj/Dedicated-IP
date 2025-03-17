package net.dedicated_ip.app

import android.content.Intent
import android.os.Bundle
import io.flutter.embedding.android.FlutterActivity
import io.flutter.embedding.engine.FlutterEngine
import io.flutter.plugin.common.MethodChannel

class MainActivity : FlutterActivity() {

  private var flutterChannel: MethodChannel? = null
  private val CHANNEL = "stripe_payment_channel"

  override fun configureFlutterEngine(flutterEngine: FlutterEngine) {
    super.configureFlutterEngine(flutterEngine)

    flutterChannel = MethodChannel(flutterEngine.dartExecutor.binaryMessenger, CHANNEL)
    flutterChannel?.setMethodCallHandler { call, result ->
      if (call.method == "startStripeCheckout") {
        val clientSecret = call.argument<String>("clientSecret")
        val productId = call.argument<String>("productId")
        val productPrice = call.argument<String>("productPrice")
        val productTitle = call.argument<String>("productTitle")
        val merchantDisplayName = call.argument<String>("merchantDisplayName")

        if (clientSecret == null) {
          result.error("INVALID_ARGS", "Client secret is null", null)
          return@setMethodCallHandler
        }

        val intent = Intent(this, StripeCheckoutActivity::class.java).apply {
          putExtra(StripeCheckoutActivity.EXTRA_CLIENT_SECRET, clientSecret)
          putExtra(StripeCheckoutActivity.EXTRA_PRODUCT_ID, productId)
          putExtra(StripeCheckoutActivity.EXTRA_PRODUCT_PRICE, productPrice)
          putExtra(StripeCheckoutActivity.EXTRA_PRODUCT_TITLE, productTitle)
          putExtra(StripeCheckoutActivity.EXTRA_MERCHANT_NAME, merchantDisplayName)
        }

        startActivity(intent)
        result.success(null)

      } else {
        result.notImplemented()
      }
    }
  }

  fun sendResultToFlutter(status: String, message: String) {
    val result = mapOf("status" to status, "message" to message)
    runOnUiThread {
      flutterChannel?.invokeMethod("paymentResult", result)
    }
  }
}
