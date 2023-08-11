<template>
  <section v-if="errored">
    <p>
      We're sorry, we're not able to retrieve this information at the moment, please try back later
    </p>
  </section>

  <section v-else>
    <div v-if="storeCatalog.loading">Loading...</div>
    <display-search :goods-list="goods"></display-search>
  </section>
</template>

<script setup>
import DisplaySearch from '@/components/displayProducts/displaySearch.vue';
import { onMounted, reactive, ref } from 'vue';
import { useCatalogStore } from '@/stores/catalog';

const goods = reactive([]);
const errored = ref();
const storeCatalog = useCatalogStore();
onMounted(async () => {
  const { data, error } = await storeCatalog.requestGoods();
  goods.push(...storeCatalog.newGoods);
  if (data) goods.push(...data);
  errored.value = error;
});
</script>

<style scoped></style>
