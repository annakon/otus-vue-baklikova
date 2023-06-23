<template>
  <section v-if="storeCatalog.errored">
    <p>
      We're sorry, we're not able to retrieve this information at the moment, please try back later
    </p>
  </section>

  <section v-else>
    <div v-if="storeCatalog.loading">Loading...</div>
    <display-search :goods-list="storeCatalog.goods"></display-search>
  </section>
</template>

<script setup>
import DisplaySearch from '@/components/displayProducts/displaySearch.vue';
import { onMounted } from 'vue';
import {useCatalogStore} from "@/stores/catalog";

const storeCatalog = useCatalogStore();
onMounted(storeCatalog.requestGoods);
</script>

<style scoped></style>
