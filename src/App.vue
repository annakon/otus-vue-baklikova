<script setup>
import SearchForm from '@/components/searchForm.vue';
</script>

<template>
  <header>
    <h1>Cписок товаров</h1>
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <router-link to="/add" class="navbar-brand">Добавить товар</router-link>
        <router-link to="/order" class="navbar-brand">Оформить заказ</router-link>
        <router-link to="/" class="navbar-brand">Просмотр списка</router-link>
        <search-form></search-form>
      </div>
    </nav>
  </header>
  <router-view />
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>
