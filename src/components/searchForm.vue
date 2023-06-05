<template>
  <form>
    <div class="row">
      <div class="col">
        <input type="text" class="form-control" v-model="nameFind" placeholder="Название">
      </div>
      <div class="col">
        <input type="number" class="form-control" v-model.number="priceFind" placeholder="Цена">
      </div>
      <div class="col-auto">
        <a href="#/find"
           @click="$emit('find-card',{name:nameFind,price:priceFind})">Найти</a>
      </div>
    </div>
  </form>
</template>

<script setup>
import {ref} from "vue";

const nameFind=ref("");
const priceFind=ref();

</script>

<style scoped>

</style>
