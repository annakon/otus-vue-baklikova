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
import { useApi } from '@/api';
import DisplaySearch from '@/components/displayProducts/displaySearch.vue';
import { onMounted } from 'vue';

const { errored, loading, requestGoods, goods } = useApi();

onMounted(requestGoods);
</script>

<style scoped></style>
