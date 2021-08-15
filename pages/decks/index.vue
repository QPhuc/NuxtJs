<template>
  <div>
    <div class="ct">
      <h1>List of your decks:</h1>
      <ul class="decks-list">
        <li>
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
        </li>
        <li>
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
        </li>
        <li>
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
        </li>
      </ul>
    </div>
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
.decks-list {
  list-style: none;
  margin: 0;
  padding: 0;
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
</style>
