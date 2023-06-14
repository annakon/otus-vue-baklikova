<template>
  <section v-if="errored">
    <p>
      We're sorry, we're not able to retrieve this information at the moment, please try back
      later
    </p>
  </section>

  <section v-else>
    <div v-if="loading">Loading...</div>
    <GoodsItem v-else v-for="item in props.goodsList" :key="item.id" :goods="item"> </GoodsItem>
  </section>
</template>

<script setup>
import { errored, loading} from "@/api";
import GoodsItem from '@/components/GoodsItem.vue';

const props = defineProps(['goodsList']);

</script>

<style scoped>

</style>
