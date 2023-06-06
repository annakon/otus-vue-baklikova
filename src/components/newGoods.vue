<template>
  <form class="row g-3">
    <div class="col-md-6">
      <label for="nameGoods">Название товара</label>
        <input type="text" class="form-control" id="nameGoods">
      </div>
      <div class="col-md-3">
      <label for="priceGoods">Цена</label>
        <input type="number" class="form-control" id="priceGoods">
      </div>
    <div class="col-12">
      <label for="description" class="form-label">Описание</label>
     <textarea class="form-control" rows="3" id="description">
     </textarea>
    </div>
    <div class="col-12">
      <a href="#/add" @click="">Добавить</a>
    </div>
  </form>
</template>

<script setup>
</script>

<style scoped>
* {
  margin: 0;
}
form {
  margin: 1rem;
}
</style>
