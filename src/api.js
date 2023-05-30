import axios from "axios";
import {ref} from "vue";

export let goods = ref();
export let errored=ref();
export let loading=ref(true);
const request='https://fakestoreapi.com/products'

export async function requestGoods() {
    await axios
        .get(request)
        .then(response => (goods.value = response.data))
        .catch(error => {
            console.log(error);
            errored.value = true;
        })
        .finally(() => (loading.value = false));
}
