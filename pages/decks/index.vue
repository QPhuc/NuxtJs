<template>
  <div>
    <div class="ct">
      <div class="d_flex justify_content_between my_3">
        <h1>List of your decks:</h1>
        <button class="btn btn_success" @click.prevent="openModal">Create a Deck</button>
      </div>
      <ul class="decks-list">
        <DeckList
          v-for="deck in decks"
          :key="deck.id"
          :id="deck.id"
          :name="deck.name"
          :description="deck.description"
          :thumbnail="deck.thumbnail"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import DeckList from '@/components/Decks/DeckList'
export default {
  components: { DeckList },
  middleware: ['check-auth', 'auth'],
  head: {
    title: 'Decks | TQP',
  },
  computed: {
    decks() {
      return this.$store.getters.decks;
    }
  },
  methods: {
    openModal() {
      this.$modal.open({ name: 'DeckFormModal' })
    },
    onSubmit(deckData) {
      axios.post(process.env.baseApiUrl + '/decks.json', deckData)
        .then((data) => { console.log(data); })
        .catch(e => { console.log(e); })
    }
  },
}
</script>

<style>
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

.modal__body {
  background-color: #fff;
  padding: 2rem;
}
</style>
