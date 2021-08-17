import axios from 'axios';

import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      decks: [],
    },
    mutations: {
      addDeck(state, newDeck) {
        state.decks.push(newDeck);
      },
      editDeck(state, editDeck) {
        const deckIndex = state.decks.findIndex(deck => deck.id === editDeck.id);

        state.decks[deckIndex] = editDeck;
      },
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
      addDeck(vuexContext, deckData) {
        return axios
          .post('https://nuxt-learn-english-default-rtdb.asia-southeast1.firebasedatabase.app/decks.json', deckData)
          .then((result) => {
            vuexContext.commit('addDeck', { ...deckData, id: result.data.name })
          })
          .catch(e => { console.log(e); })
      },
      editDeck(vuexContent, deckData) {
        const deckId = deckData.id;
        delete deckData.id;

        return axios.put(`https://nuxt-learn-english-default-rtdb.asia-southeast1.firebasedatabase.app/decks/${deckId}.json`, deckData)
          .then((result) => {
            vuexContent.commit('editDeck', { ...result.data, id: deckId })
          })
          .catch(e => { console.log(e); })
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
