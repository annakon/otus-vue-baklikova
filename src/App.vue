<script setup>
import { onMounted} from "vue";
import GoodsItem from "@/components/GoodsItem.vue";
import {requestGoods,goods,errored,loading} from "./api";
import SearchForm from "@/components/searchForm.vue";

onMounted(requestGoods)
</script>

<template>
  <header>
    <h1>Cписок товаров</h1>
    <search-form @find-card="findCard"></search-form>
  </header>
  <div>
    <section v-if="errored">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>

    <section v-else>
      <div v-if="loading">Loading...</div>
    <GoodsItem v-else v-for="item in goods"
                :key="item.id"
                :goods="item">
    </GoodsItem>
    </section>
  </div>
</template>

<style scoped>
  h1 {
    text-align: center;
  }
</style>
