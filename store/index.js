import axios from 'axios';

import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      decks: [],
    },
    mutations: {
      setDecks(state, decks) {
        state.decks = decks;
      }
    },
    actions: {
      nuxtServerInit(vuexContent, context) {
        return axios.get('https://nuxt-learn-english-default-rtdb.asia-southeast1.firebasedatabase.app/decks.json')
          .then((response) => {
            const decksArr = [];
            for (const key in response.data) {
              decksArr.push({ ...response.data[key], id: key });
            }

            vuexContent.commit('setDecks', decksArr);
          });
      },
      setDecks(vuexContext, decks) {
        vuexContext.commit('setDecks', decks)
      }
    },
    getters: {
      decks(state) {
        return state.decks;
      }
    },
  })
}

export default createStore;
