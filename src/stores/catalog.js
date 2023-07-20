import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useCatalogStore = defineStore('catalog', () => {
  const loading = ref(true);
  const request = 'https://fakestoreapi.com/products';

  async function requestGoods() {
    return new Promise(async (resolve) => {
      loading.value = false;
      await axios
        .get(request)
        .then((response) => {
          resolve({ data: response.data, error: null });
        })
        .catch((error) => {
          resolve({ data: null, error: error });
        })
        .finally(() => {
          loading.value = false;
        });
    });
  }

  async function requestProduct(requestOneProduct) {
    return new Promise(async (resolve) => {
      loading.value = false;
      await axios
        .get(requestOneProduct)
        .then((response) => {
          resolve({ data: response.data, error: null });
        })
        .catch((error) => {
          resolve({ data: null, error: error });
        })
        .finally(() => (loading.value = false));
    });
  }

  return { loading, requestProduct, requestGoods };
});
