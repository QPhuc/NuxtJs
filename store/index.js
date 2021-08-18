import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      decks: [],
      token: null,
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
      },
      setToken(state, token) {
        state.token = token;
      }
    },
    actions: {
      nuxtServerInit(vuexContent, context) {
        return context.app.$axios
          .$get('https://nuxt-learn-english-default-rtdb.asia-southeast1.firebasedatabase.app/decks.json')
          .then((data) => {
            const decksArr = [];
            for (const key in data) {
              decksArr.push({ ...data[key], id: key });
            }

            vuexContent.commit('setDecks', decksArr);
          }).catch(e => {
            context.error(e)
          })
      },
      addDeck(vuexContext, deckData) {
        return this.$axios
          .$post(process.env.baseApiUrl + '/decks.json', deckData)
          .then((data) => {
            vuexContext.commit('addDeck', { ...deckData, id: data.name })
          })
          .catch(e => { console.log(e); })
      },
      authenticateUser(vuexContext, credentials) {
        return new Promise((resolve, reject) => {
          // check login or register
          let authUrlApi = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.fbApiKey}`;

          if (!credentials.isLogin) {
            authUrlApi = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.fbApiKey}`;
          }
          // call api to firebase
          this.$axios.$post(authUrlApi, {
            email: credentials.email,
            password: credentials.password,
            returnSecureToken: true,
          })
            .then(result => {
              vuexContext.commit('setToken', result.idToken)
              resolve({ success: true })
            }).catch(error => {
              reject(error.response)
            })
        })
      },
      editDeck(vuexContent, deckData) {
        const deckId = deckData.id;
        delete deckData.id;

        return this.$axios
          .$put(`${process.env.baseApiUrl}/decks/${deckId}.json`, deckData)
          .then((data) => {
            vuexContent.commit('editDeck', { ...data, id: deckId })
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
