import {describe, it, expect, vi, beforeEach} from 'vitest';

import { mount} from '@vue/test-utils';
import component from '@/components/displayProducts/GoodsItem.vue';
import {createPinia, setActivePinia} from "pinia";
import {useCartStore} from "@/stores/cart";

vi.mock('vue-router')
describe('GoodsItem', () => {
  const item = {"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}};
  let wrapper

  beforeEach(() => {
    setActivePinia(createPinia())
    wrapper = mount(component, { global: {
        stubs: ['RouterLink'],
      },props: { goods:item } });
  })
  it('renders properly', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper.exists()).toBe(true);
  });
  it("contain в корзину", () => {
    expect(wrapper.html()).toContain("В корзину");
  });
  it("renders all", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("call alert", async () => {
    const Control = wrapper.find('button');
    expect(Control.exists()).toBe(true);
    window.alert = vi.fn();
    await Control.trigger("click");
    expect(window.alert).toBeCalled();
  });
  it("add to cart ", async () => {
    const Control = wrapper.find('button');
    expect(Control.exists()).toBe(true);
    window.alert = vi.fn();
    await Control.trigger("click");
    const cart = useCartStore();
    expect(cart.cart.get(1)).toStrictEqual({...item,...{quantity:1}});
  });
});
