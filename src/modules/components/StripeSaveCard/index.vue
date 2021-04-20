<template>
  <div class="sr-payment-form card">
    <div class="sr-form-row">
      <div class="sr-input sr-element sr-card-element" id="card-element">
        <!-- A Stripe card Element will be inserted here. -->
      </div>
    </div>
    <div class="sr-field-error" id="card-errors" role="alert"></div>
  </div>
</template>

<script>
import { GetPublicKey, CreateSetupIntent } from '@/api/user-page'
export default {
  name: 'StripeSaveCard',
  components: {},
  props: {},
  filter: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  activated() {
    this.getData()
  },
  mounted() {
    this.getPublicKey()
  },
  methods: {
    getPublicKey() {
      return GetPublicKey().then(response => {
        this.getSetupIntent(response.data)
      })
    },
    getSetupIntent(publicKey) {
      return CreateSetupIntent().then(response => {
        this.stripeElements(publicKey, response.data)
      })
    },
    stripeElements(publicKey, setupIntent) {
      var stripe = Stripe(publicKey)
      console.log('stripe', stripe)
      var elements = stripe.elements()

      // Element styles
      var style = {
        base: {
          fontSize: '16px',
          color: '#32325d',
          fontFamily:
            '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
          fontSmoothing: 'antialiased',
          '::placeholder': {
            color: 'rgba(0,0,0,0.4)'
          }
        }
      }

      var card = elements.create('card', { style: style })

      card.mount('#card-element')

      // Element focus ring
      card.on('focus', function() {
        var el = document.getElementById('card-element')
        el.classList.add('focused')
      })

      card.on('blur', function() {
        var el = document.getElementById('card-element')
        el.classList.remove('focused')
      })

      // Handle payment submission when user clicks the pay button.
      var button = document.getElementById('submit')
      button.addEventListener('click', function(event) {
        event.preventDefault()
        changeLoadingState(true)
        var email = document.getElementById('email').value

        stripe
          .confirmCardSetup(setupIntent.client_secret, {
            payment_method: {
              card: card,
              billing_details: { email: email }
            }
          })
          .then(function(result) {
            if (result.error) {
              changeLoadingState(false)
              var displayError = document.getElementById('card-errors')
              displayError.textContent = result.error.message
            } else {
              // The PaymentMethod was successfully set up
              orderComplete(stripe, setupIntent.client_secret)
            }
          })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/styles/stripe.css';
</style>
