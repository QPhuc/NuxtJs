<template>
  <div>
    <default-header />
    <Nuxt />
    <!-- Modal -->
    <v-modal v-slot="payload" name="DeckFormModal">
      <div class="modal__body">
        <h1>{{ payload && payload.payload ? 'Edit a Deck' : 'Create a new Deck' }}</h1>
        <DeckForm :deck="payload.payload" @submit="onSubmit" />
      </div>
    </v-modal>
    <default-footer />
  </div>
</template>
<script>
import axios from 'axios'

import DeckForm from '../components/Decks/DeckForm.vue'
import DefaultHeader from '../components/Header/DefaultHeader.vue'
import DefaultFooter from '../components/Footer/DefaultFooter.vue'
export default {
  components: {
    DeckForm,
    DefaultHeader,
    DefaultFooter
  },
  methods: {
    onSubmit(deckData) {
      if (deckData && !deckData.id) {
        axios.post('https://nuxt-learn-english-default-rtdb.asia-southeast1.firebasedatabase.app/decks.json', deckData)
          .then((data) => { console.log(data); })
          .catch(e => { console.log(e); })
      } else {
        const deckId = deckData.id;
        delete deckData.id;

        axios.put(`https://nuxt-learn-english-default-rtdb.asia-southeast1.firebasedatabase.app/decks/${deckId}.json`, deckData)
          .then((data) => { console.log(data); })
          .catch(e => { console.log(e); })
      }
    }
  }

}
</script>
