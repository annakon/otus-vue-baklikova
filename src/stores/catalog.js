import {reactive, ref} from 'vue';
import { defineStore } from 'pinia';
import axios from "axios";

export const useCatalogStore = defineStore('catalog', () => {
    const goods = reactive([]);
    const errored = ref();
    const loading = ref(true);
    const request = 'https://fakestoreapi.com/products';
    const product = ref();

    async function requestGoods() {
        await axios
            .get(request)
            .then((response) => (goods.push(...response.data)))
            .catch((error) => {
                console.log(error);
                errored.value = true;
            })
            .finally(() => (loading.value = false));
    }

    async function requestProduct(requestOneProduct) {
        await axios
            .get(requestOneProduct)
            .then((response) => (product.value = response.data))
            .catch((error) => {
                console.log(error);
                errored.value = true;
            })
            .finally(() => (loading.value = false));
    }

    return { goods,
        errored,
        loading,
        product,
        requestProduct,
        requestGoods,};
});
