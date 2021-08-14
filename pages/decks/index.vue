<template>
  <div>
    <h1>Your Decks, please enter number of decks show:</h1>
    <input type="text" v-model="deckID" placeholder="Please enter deckId" />
    <button @click="showDeck">Go to Deck</button>
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
    }
  }
}
</script>

<style scoped>
</style>
