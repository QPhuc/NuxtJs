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
        this.$store.dispatch('addDeck', deckData)
          .then(() => this.$modal.close({ name: 'DeckFormModal' }))
      } else {
        this.$store.dispatch('editDeck', deckData)
          .then(() => {
            this.$modal.close({ name: 'DeckFormModal' });
            this.$router.push('/decks')
          })
      }
    }
  }

}
</script>
