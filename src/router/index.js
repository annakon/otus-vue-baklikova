import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/add',
      name: 'add',
      component: () => import('../components/form/newGoods.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../components/form/orderForm.vue')
    },
    {
      path: '/',
      name: 'main',
      component: () => import('../components/displayProducts/display.vue')
    },
    {
      path: '/fff/:name?/:price?',
      name: 'fff',
      props: true,
      component: () => import('../components/search/forSearch.vue')
    },
    {
      path: '/product/:id',
      name: 'product',
      props: true,
      component: () => import('../components/displayProducts/singleProduct.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../components/cart/cart.vue')
    }
  ],
  scrollBehavior() {
    return { top: 0, left: 0 };
  }
});

export default router;
