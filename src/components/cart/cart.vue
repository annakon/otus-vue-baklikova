<template>
  <GoodsItemCart v-for="item in storeCart.cart" :key="item.id" :cart="item"> </GoodsItemCart>
  <button @click="storeCart.clearCart" class="btn btn-primary" type="button">
    Очистить корзину
  </button>
  <router-link to="/order" class="btn btn-primary">Оформить заказ</router-link>
</template>

<script setup>
import { useCartStore } from '@/stores/cart';
import GoodsItemCart from '@/components/cart/GoodsItemCart.vue';

const storeCart = useCartStore();
</script>

<style scoped>
button {
  margin-left: 2rem;
}
</style>
