<template>
  <display-search :goods-list="goodsList"></display-search>
</template>

<script setup>
import DisplaySearch from '@/components/displaySearch.vue';
import { goods } from '@/api';
import { computed } from 'vue';

const props = defineProps(['name', 'price']);

const goodsList = computed(goodsToShow);
function goodsToShow() {
  return goods.value.filter(
    (t) =>
      (t?.price === props.price || typeof props.price === 'undefined') &&
      t?.title.indexOf(props.name) !== -1
  );
}
</script>

<style scoped></style>
