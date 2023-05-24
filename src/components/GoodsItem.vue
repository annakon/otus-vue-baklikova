<template>
  <div class="card">
   <div class="cardBody">
    <h5 class="card-title">
      {{ props.goods.title }}
    </h5>
   </div>
  </div>
</template>

<script setup>

const props = defineProps(['goods']);

</script>

<style scoped>

</style>
