<template>
  <main>
    <div v-if="this.appState === 'LOADING'">loading...</div>
    <div v-else>
      <div v-for="product in products" :key="product.id">
        <product-card :product="product" />
      </div>
    </div>
  </main>
</template>

<script>
import { getProducts } from './services/api'
import { APP_STATES } from './constants'
import ProductCard from './components/ProductCard.vue'

export default {
  name: 'App',
  components: {
    ProductCard
  },
  data: () => ({
    appState: '',
    products: []
  }),
  async created() {
    this.appState = APP_STATES.LOADING
    this.products = await getProducts()
    this.appState = APP_STATES.READY
  }
}
</script>

<style scoped>
</style>
