<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/add" class="navbar-brand">Добавить товар</router-link>
      <router-link to="/" class="navbar-brand">Просмотр списка</router-link>
      <router-link to="/cart" class="navbar-brand">Корзина</router-link>
      <search-form></search-form>
    </div>
  </nav>
</template>

<script setup>
import SearchForm from '@/components/search/searchForm.vue';
</script>

<style scoped>

</style>
