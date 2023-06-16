<template>
  <GoodsItemCart v-for="item in cart" :key="item.id" :cart="item"> </GoodsItemCart>
  <button @click="clearCart" class="btn btn-primary" type="button">Очистить корзину</button>
</template>

<script setup>
import { cart, clearCart} from '@/cart';
import GoodsItemCart from '@/components/GoodsItemCart.vue';
</script>

<style scoped>
 button {
   margin-left: 2rem;
 }
</style>
