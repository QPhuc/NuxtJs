<template>
  <div>
    <div class="ct">
      <div class="d_flex justify_content_between my_3">
        <h1>List of your decks:</h1>
        <button class="btn btn_success" @click.prevent="openModal">Create a Deck</button>
      </div>
      <ul class="decks-list">
        <li>
          <nuxt-link class="deck" to="/decks/1">
            <div class="card deck-card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsK6sNyy6Ds6Q-nFnOCBVoK_IaCLJEXeyI6w&usqp=CAU"
                alt="Thumbnail card"
              />
              <div class="card_body">
                <h3>Title card</h3>
                <p>Description card</p>
              </div>
            </div>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link class="deck" to="/decks/2">
            <div class="card deck-card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsK6sNyy6Ds6Q-nFnOCBVoK_IaCLJEXeyI6w&usqp=CAU"
                alt="Thumbnail card"
              />
              <div class="card_body">
                <h3>Title card</h3>
                <p>Description card</p>
              </div>
            </div>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link class="deck" to="/decks/3">
            <div class="card deck-card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsK6sNyy6Ds6Q-nFnOCBVoK_IaCLJEXeyI6w&usqp=CAU"
                alt="Thumbnail card"
              />
              <div class="card_body">
                <h3>Title card</h3>
                <p>Description card</p>
              </div>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <v-modal name="test">
      <div class="test__body">
        <h1>Hello text modal</h1>
        <button class="btn btn_danger" @click.prevent="closeModal">Close Modal</button>
      </div>
    </v-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deckID: '1',
    }
  },
  methods: {
    showDeck() {
      // this.$router.push('/decks/' + this.deckID);
      this.$router.push(`/decks/${this.deckID}`);
    },
    openModal() {
      this.$modal.open({ name: 'test' })
    },
    closeModal() {
      this.$modal.close({ name: 'test' })
    }
  }
}
</script>

<style scoped>
.deck {
  display: block;
}

.decks-list li {
  margin-bottom: 1rem;
}

.decks-list li:last-child {
  margin-bottom: 0;
}

.deck-card {
  display: flex;
  flex-direction: row;
  height: 160px;
}

.deck-card img {
  width: 160px;
  height: auto;
}

.test__body {
  background-color: #fff;
  padding: 2rem;
}
</style>
