import { ref } from 'vue';

export const cart = ref([]);

export function addToCart(product) {
  let item = cart.value.find((i) => i.id === product.id);

  if (item) {
    item.quantity++;
  } else {
    cart.value.push({ ...product, quantity: 1 });
  }
}
