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
