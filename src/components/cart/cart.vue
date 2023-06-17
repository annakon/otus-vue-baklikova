<template>
  <GoodsItemCart v-for="item in cart" :key="item.id" :cart="item"> </GoodsItemCart>
  <button @click="clearCart" class="btn btn-primary" type="button">Очистить корзину</button>
  <router-link to="/order" class="btn btn-primary">Оформить заказ</router-link>
</template>

<script setup>
import { cart, clearCart } from '@/cart';
import GoodsItemCart from '@/components/cart/GoodsItemCart.vue';
</script>

<style scoped>
button {
  margin-left: 2rem;
}
</style>
