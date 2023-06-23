import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {

  async function saveOrder(orderData, callback) {
    await fetch('https://reqbin.com/echo/post/json', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderData)
    })
      .then((response) => response.json())
      .then((response) => console.log(JSON.stringify(response)))
      .then(callback)
      .catch((error) => {
        alert(error);
      });
  }
  return {
    saveOrder
  };
});
