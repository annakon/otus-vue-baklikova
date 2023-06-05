<template>
  <form>
    <div class="row">
      <div class="col">
        <input type="text" class="form-control" placeholder="Название">
      </div>
      <div class="col">
        <input type="text" class="form-control" placeholder="Цена">
      </div>
      <div class="col-auto">
        <a href="#/find"
           @click="$emit('find-card')">Найти</a>
      </div>
    </div>
  </form>
</template>

<script setup>
</script>

<style scoped>

</style>
