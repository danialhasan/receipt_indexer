import { createStore } from "vuex";
// import cart from "./modules/cart";
// import products from "./modules/products";

// const debug = process.env.NODE_ENV !== "production";

export const store = createStore({
  state() {
    return {
      count: 0,
      files: {},
    };
  },
  getters: {
    getCount(state) {
      return this.count;
    },
    getFiles(state) {
      return this.files;
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    addFiles(state, payload) {
      state.files = payload;
    },
  },
  actions: {},
});
