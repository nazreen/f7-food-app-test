<template>
  <f7-card outline>
    <f7-card-content>
    <f7-row>
      <f7-col width="25">
        <img :src="display.image" alt="">
      </f7-col>
    <f7-col width="50">
      <f7-row>
        <span>{{ display.name }}</span>
      </f7-row>
      <f7-row>
        <span v-html="display.description" />
      </f7-row>
        <span>{{ display.price }}</span>
      <f7-row>
        <f7-col>
          <recommended v-if="display.recommended" />
          <popular v-if="display.popular" />
        </f7-col>
  
      </f7-row>

    </f7-col>
    <f7-col width="25">
      <f7-segmented>
        <f7-button outline small class="minus">
          <f7-icon f7="minus" color="black"></f7-icon>
        </f7-button>
        <f7-button outline small class="plus">
          <f7-icon f7="plus" color="black"></f7-icon>
        </f7-button>
      </f7-segmented>
    </f7-col>
    </f7-row>
    </f7-card-content>
  </f7-card>
</template>

<script>
import Recommended from './Recommended.vue'
import Popular from './Popular.vue'

export default {
  name: 'ProductCard',
  components: {
    Recommended,
    Popular
  },
  props: {
    product: Object,
    toast: Object
  },
  created() {

  },
  computed: {
    display() {
      const { product } = this
      return {
        image: product.images[0].thumbnail,
        name: product.name,
        description: product.short_description,
        price: `${product.prices.currency_symbol} ${(product.prices.price/100).toFixed(2)}`,
        recommended: product.average_rating >= 4,
        popular: product.review_count >= 1
      }
    }
  }
}
</script>

<style scoped>
img {
  height: 100px;
  border-radius: 5px;
}
.plus, .minus {
  border: 1px solid lightgrey
}
</style>