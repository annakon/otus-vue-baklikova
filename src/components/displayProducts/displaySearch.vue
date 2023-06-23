<template>
  <GoodsItem v-for="item in props.goodsList" :key="item.id" :goods="item"> </GoodsItem>
</template>

<script setup>
import GoodsItem from '@/components/displayProducts/GoodsItem.vue';

const props = defineProps(['goodsList']);
</script>

<style scoped></style>
