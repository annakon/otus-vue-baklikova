<script setup>
import {onMounted, reactive, ref, computed} from "vue";
import GoodsItem from "@/components/GoodsItem.vue";
import {requestGoods,goods,errored,loading} from "./api";
import SearchForm from "@/components/searchForm.vue";

onMounted(requestGoods);

const goodsList = computed(goodsToShow);
const isFind=ref(false);
const forSearch=reactive([]);
function goodsToShow(){return isFind.value?goods.value.filter(t => t?.price===forSearch.value.price):goods.value}
function findCard(findObj){
  console.log("find");
  isFind.value=true;
  forSearch.value=findObj;
}

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
    <GoodsItem v-else v-for="item in goodsList"
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
