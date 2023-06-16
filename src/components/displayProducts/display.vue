<template>
  <section v-if="errored">
    <p>
      We're sorry, we're not able to retrieve this information at the moment, please try back later
    </p>
  </section>

  <section v-else>
    <div v-if="loading">Loading...</div>
    <display-search :goods-list="goods"></display-search>
  </section>
</template>

<script setup>
import { errored, loading, requestGoods, goods } from '@/api';
import DisplaySearch from '@/components/displayProducts/displaySearch.vue';
import { onMounted } from 'vue';

onMounted(requestGoods);
</script>

<style scoped></style>
