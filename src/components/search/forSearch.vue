<template>
  <display-search :goods-list="goodsList"></display-search>
</template>

<script setup>
import DisplaySearch from '@/components/displayProducts/displaySearch.vue';
import { computed } from 'vue';

const props = defineProps(['name', 'price']);
import { useCatalogStore } from '@/stores/catalog';

const storeCatalog = useCatalogStore();

const goodsList = computed(goodsToShow);
function goodsToShow() {
  return storeCatalog.goods.filter(
    (t) =>
      (t?.price === Number(props.price) || props.price === '') &&
      t?.title.indexOf(props.name) !== -1
  );
}
</script>

<style scoped></style>
