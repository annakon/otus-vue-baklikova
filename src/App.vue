<script setup>
import SearchForm from '@/components/search/searchForm.vue';
import Login from '@/components/login/login.vue';
</script>

<template>
  <div v-if="($route.name !== 'login') & ($route.name !== 'order')">
    <header>
      <Login></Login>
      <h1>Cписок товаров</h1>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <router-link to="/add" class="navbar-brand">Добавить товар</router-link>
          <router-link to="/" class="navbar-brand">Просмотр списка</router-link>
          <router-link to="/cart" class="navbar-brand">Корзина</router-link>
          <search-form></search-form>
        </div>
      </nav>
    </header>
    <router-view />
  </div>
  <div v-else>
    <router-view />
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>
