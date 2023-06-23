<template>
  <Form class="row g-3">
    <div class="col-md-6">
      <label for="nameGoods">Название товара</label>
      <input type="text" class="form-control" id="nameGoods" v-model="nameNew" />
    </div>
    <div class="col-md-3">
      <label for="priceGoods">Цена</label>
      <field
        name="price"
        type="number"
        class="form-control"
        id="priceGoods"
        v-model.number="priceNew"
        :rules="priceRules"
      />
      <ErrorMessage name="price" />
    </div>
    <div class="col-12">
      <label for="description" class="form-label">Описание</label>
      <textarea class="form-control" rows="3" id="description" v-model="descriptionNew"> </textarea>
    </div>
    <div class="col-12">
      <button @click="addNew" class="btn btn-primary">Добавить</button>
    </div>
  </Form>
  <display-search :goods-list="storeCatalog.goods"></display-search>
</template>

<script setup>
import { ref } from 'vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import DisplaySearch from '@/components/displayProducts/displaySearch.vue';

const nameNew = ref('');
const descriptionNew = ref('');
const priceNew = ref();
const priceRules = yup.number().required().positive();
import {useCatalogStore} from "@/stores/catalog";

const storeCatalog = useCatalogStore();

function addNew(event) {
  let newObj = {
    category: 'new',
    image: '/public/favicon.ico',
    rating: { rate: 0, count: 0 },
    buttonDisabled: true
  };
  newObj.id = storeCatalog.goods.value.length + 1;
  newObj.title = nameNew.value;
  newObj.price = priceNew.value;
  newObj.description = descriptionNew.value;
  nameNew.value = '';
  priceNew.value = '';
  descriptionNew.value = '';
  storeCatalog.goods.value.unshift(newObj);
}
</script>

<style scoped>
* {
  margin: 0;
}
form {
  margin: 1rem;
}
span {
  display: block;
  font-size: 80%;
  margin-top: 0.25rem;
  color: #dc3545;
}
button {
  margin-top: 0.5rem;
}
</style>
