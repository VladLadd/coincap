import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Exchanges: [],
    Markets: [],
  },
  getters: {
    listExchanges(state) {
      return state.Exchanges;
    },
    listMarkets(state) {
      return state.Markets;
    },
  },
  mutations: {
    getListExchanges(state, data) {
      state.Exchanges = data.data;
    },
    getListMarkets(state, data) {
      state.Markets = data.data;
    },
  },
  actions: {
    async getListExchanges(context) {
      let { data } = await axios.get(`https://api.coincap.io/v2/exchanges`);
      context.commit("getListExchanges", data);
    },
    async getListMarkets(context) {
      let { data } = await axios.get(`https://api.coincap.io/v2/markets`);
      context.commit("getListMarkets", data);
    },
  },
});
