<template>
  <f7-app :params="$root.f7params">
    <f7-page>
      <main>
        <div v-if="this.appState === 'LOADING'">loading...</div>
        <div v-else>
          <div v-for="product in products" :key="product.id">
            <product-card :product="product" :toast="toast"/>
          </div>
        </div>
      </main>
      <f7-fab position="center-bottom" slot="fixed" text="Menu" color="blue">
        <f7-icon f7="menu"></f7-icon>
      </f7-fab>
  </f7-page>
  </f7-app>
</template>

<script>
import { getProducts } from './services/api'
import { APP_STATES } from './constants'
import ProductCard from './components/ProductCard.vue'
// import Framework7 from "framework7"
import { f7ready } from 'framework7-vue';

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
  },
  mounted() {
    f7ready(() => {
      console.log('f7 is ready')
    })
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
