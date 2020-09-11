<template>
  <main>
    <div v-if="this.appState === 'LOADING'">loading...</div>
    <div v-else>
      <div v-for="product in products" :key="product.id">
        <product-card :product="product" :toast="toast"/>
      </div>
    </div>
  </main>
</template>

<script>
import { getProducts } from './services/api'
import { APP_STATES } from './constants'
import ProductCard from './components/ProductCard.vue'
// import Framework7 from "framework7"

export default {
  name: 'App',
  components: {
    ProductCard
  },
  data: () => ({
    appState: '',
    products: [],
    toast: null
  }),
  async created() {
    this.appState = APP_STATES.LOADING
    this.products = await getProducts()
    this.appState = APP_STATES.READY
    // const app = new Framework7({ name: 'toast-app'})
    // this.toast = app.toast
  }
}
</script>

<style scoped>
main {
  padding: 10px;
  max-width: 500px;
  margin: 0 auto;
}
</style>
