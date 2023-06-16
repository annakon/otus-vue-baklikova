<template>
  <GoodsItemCart v-for="item in cart" :key="item.id" :cart="item"> </GoodsItemCart>
</template>

<script setup>
import { cart } from '@/cart';
import GoodsItemCart from '@/components/GoodsItemCart.vue';
</script>

<style scoped></style>
