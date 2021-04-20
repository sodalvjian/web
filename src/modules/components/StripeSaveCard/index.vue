<template>
  <div class="sr-payment-form card" v-loading="pageLoading">
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
import store from '@/store'
export default {
  name: 'StripeSaveCard',
  components: {},
  props: {},
  filter: {},
  data() {
    return {
      cardData: {},
      pageLoading: false,
      email: store.getters.userInfo.email,
      setupIntent: {},
      stripeFun: {},
      publicKey: ''
    }
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
    submitCard() {
      // var email = document.getElementById('email').value
      // eslint-disable-next-line no-undef
      console.log('this.card', this.cardData, this.setupIntent)
      this.stripeFun
        .confirmCardSetup(this.setupIntent.client_secret, {
          payment_method: {
            card: this.cardData,
            billing_details: { email: this.email }
          }
        })
        .then(result => {
          if (result.error) {
            this.$message.warning(result.error.message)
          } else {
            console.log('result', result)
            this.$message.success('Add card success.')
            this.$emit('complate-card', result.setupIntent)
          }
        })
    },
    getPublicKey() {
      this.pageLoading = true
      return GetPublicKey().then(response => {
        this.getSetupIntent(response.data)
        this.publicKey = response.data
      })
    },
    getSetupIntent(publicKey) {
      return CreateSetupIntent().then(response => {
        this.stripeElements(publicKey, response.data)
        this.setupIntent = response.data
        this.pageLoading = false
      })
    },
    stripeElements(publicKey, setupIntent) {
      // eslint-disable-next-line no-undef
      this.stripeFun = Stripe(publicKey)
      console.log('stripe', this.stripeFun)
      var elements = this.stripeFun.elements()

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

      card.on('blur', () => {
        var el = document.getElementById('card-element')
        el.classList.remove('focused')
      })
      this.cardData = card
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/styles/stripe.css';
</style>
