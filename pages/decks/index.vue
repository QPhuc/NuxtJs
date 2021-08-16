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

    <!-- Modal -->
    <v-modal name="CreateDeckModal">
      <div class="modal__body">
        <h1>Create a new Deck</h1>
        <DeckForm @submit="onSubmit" />
      </div>
    </v-modal>
  </div>
</template>

<script>
import axios from 'axios'

import DeckList from '@/components/Decks/DeckList'
import DeckForm from '@/components/Decks/DeckForm'
export default {
  components: { DeckList, DeckForm },
  // fetch(context) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve({
  //         decks: [
  //           {
  //             id: 1,
  //             name: 'Learn English',
  //             description:
  //               'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum',
  //             thumbnail:
  //               'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsK6sNyy6Ds6Q-nFnOCBVoK_IaCLJEXeyI6w&usqp=CAU',
  //           },
  //           {
  //             id: 2,
  //             name: 'Learn Chinese',
  //             description:
  //               'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum',
  //             thumbnail:
  //               'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsK6sNyy6Ds6Q-nFnOCBVoK_IaCLJEXeyI6w&usqp=CAU',
  //           },
  //           {
  //             id: 3,
  //             name: 'Learn Japanese',
  //             description:
  //               'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum',
  //             thumbnail:
  //               'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsK6sNyy6Ds6Q-nFnOCBVoK_IaCLJEXeyI6w&usqp=CAU',
  //           },
  //         ]
  //       })
  //     }, 1500);
  //   }).then(data => {
  //     context.store.dispatch('setDecks', data.decks)
  //   }).catch(e => {
  //     console.log(e);
  //   })
  // },
  // data() {
  //   return {
  //     decks: [],
  //   }
  // },
  computed: {
    decks() {
      return this.$store.getters.decks;
    }
  },
  methods: {
    openModal() {
      this.$modal.open({ name: 'CreateDeckModal' })
    },
    onSubmit(deckData) {
      axios.post('https://nuxt-learn-english-default-rtdb.asia-southeast1.firebasedatabase.app/decks.json', deckData)
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
