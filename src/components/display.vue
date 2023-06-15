<template>
  <section v-if="errored">
    <p>
      We're sorry, we're not able to retrieve this information at the moment, please try back later
    </p>
  </section>

  <section v-else>
    <div v-if="loading">Loading...</div>
    <GoodsItem v-else v-for="item in goods" :key="item.id" :goods="item"> </GoodsItem>
  </section>
</template>

<script setup>
import { errored, loading, requestGoods, goods } from '@/api';
import GoodsItem from '@/components/GoodsItem.vue';
import { onMounted } from 'vue';

onMounted(requestGoods);
</script>

<style scoped></style>
