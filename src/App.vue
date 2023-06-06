<script setup>
import {onMounted, reactive, ref, computed} from "vue";
import GoodsItem from "@/components/GoodsItem.vue";
import {requestGoods,goods,errored,loading} from "./api";
import SearchForm from "@/components/searchForm.vue";
import NewGoods from "@/components/newGoods.vue";

onMounted(requestGoods);

const goodsList = computed(goodsToShow);
const isFind=ref(false);
const forSearch=reactive([]);
const isAdd=ref(false);
function goodsToShow(){
  return isFind.value?
      goods.value.filter(t => (t?.price===forSearch.value.price || typeof forSearch.value.price=== "undefined")
          && t?.title.indexOf(forSearch.value.name)!==-1)
      :goods.value}
function findCard(findObj){
  isFind.value=true;
  forSearch.value=findObj;
}

function addGoods(){
  isAdd.value=true;
}

</script>

<template>
  <header>
    <h1>Cписок товаров</h1>
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
         <a href="#/add" class="navbar-brand" @click="addGoods">Добавить товар</a>
         <a href="#/order" class="navbar-brand" @click="">Оформить заказ</a>
        <search-form @find-card="findCard"></search-form>
      </div>
    </nav>
  </header>
  <div>
    <section v-if="isAdd">
      <newGoods></newGoods>
    </section>
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
