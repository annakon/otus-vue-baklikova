<template>
  <div class="card text-center">
    <img class="card-img-top" :src="props.goods.image" alt="Card image" />
    <div class="cardBody">
      <h5 class="card-title">
        {{ props.goods.title }}
      </h5>
      <h6 class="card-subtitle mb-2 text-muted">
        {{ props.goods.price }}
      </h6>
      <p class="card-text">
        {{ props.goods.description }}
      </p>
      <p class="card-text text-muted">
        rate: {{ props.goods.rating.rate }} count: {{ props.goods.rating.count }}
      </p>
      <router-link to="#" class="btn btn-primary">Подробнее</router-link>
      <router-link to="#" class="btn btn-primary">В корзину</router-link>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['goods']);
</script>

<style scoped>
img {
  max-width: 30%;
  margin-left: auto;
  margin-right: auto;
}
</style>
