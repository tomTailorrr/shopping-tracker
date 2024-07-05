import { createStore } from 'vuex';

export default createStore({
  state: {
    items: []
  },
  mutations: {
    ADD_ITEM(state, item) {
      state.items.push(item);
    }
  },
  actions: {
    addItem({ commit }, item) {
      commit('ADD_ITEM', item);
    }
  },
  getters: {
    totalAmount(state) {
      return state.items.reduce((total, item) => total + item.price, 0);
    }
  }
});
