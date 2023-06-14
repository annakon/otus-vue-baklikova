<template>
  <section v-if="errored">
    <p>
      We're sorry, we're not able to retrieve this information at the moment, please try back
      later
    </p>
  </section>

  <section v-else>
    <div v-if="loading">Loading...</div>
    <GoodsItem v-else v-for="item in goodsList" :key="item.id" :goods="item"> </GoodsItem>
  </section>
</template>

<script setup>
import {computed} from "vue";
import {goods, errored, loading} from "@/api";
import GoodsItem from '@/components/GoodsItem.vue';

const props = defineProps(['isFind','forSearch']);

const goodsList = computed(goodsToShow);
function goodsToShow() {
  return props.isFind.value
      ? goods.value.filter(
          (t) =>
              (t?.price === props.forSearch.value.price || typeof props.forSearch.value.price === 'undefined') &&
              t?.title.indexOf(props.forSearch.value.name) !== -1
      )
      : goods.value;
}

</script>

<style scoped>

</style>
