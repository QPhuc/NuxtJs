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
          :key="deck._id"
          :id="deck._id"
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
        <form action>
          <div class="form_group">
            <label for>Name:</label>
            <input class="form_control" type="text" placeholder="Please enter name deck" />
          </div>
          <div class="form_group">
            <label for>Description:</label>
            <textarea class="form_control" placeholder="Please enter description"></textarea>
          </div>
          <div class="form_group">
            <label for>Thumbnail:</label>
            <input type="file" />
            <div class="preview"></div>
          </div>
          <div class="form_group d_flex justify_content_end">
            <button class="btn btn_danger" @click.prevent="closeModal">Close</button>
            <button class="btn btn_success ml_3" @click.prevent="createModal">Create</button>
          </div>
        </form>
      </div>
    </v-modal>
  </div>
</template>

<script>
import DeckList from '@/components/Decks/DeckList'
export default {
  components: { DeckList },
  data() {
    return {
      decks: [
        {
          _id: 1,
          name: 'Learn English',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum',
          thumbnail:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsK6sNyy6Ds6Q-nFnOCBVoK_IaCLJEXeyI6w&usqp=CAU',
        },
        {
          _id: 2,
          name: 'Learn Chinese',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum',
          thumbnail:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsK6sNyy6Ds6Q-nFnOCBVoK_IaCLJEXeyI6w&usqp=CAU',
        },
        {
          _id: 3,
          name: 'Learn Japanese',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum',
          thumbnail:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsK6sNyy6Ds6Q-nFnOCBVoK_IaCLJEXeyI6w&usqp=CAU',
        },
      ],
    }
  },
  methods: {
    openModal() {
      this.$modal.open({ name: 'CreateDeckModal' })
    },
    closeModal() {
      this.$modal.close({ name: 'CreateDeckModal' })
    },
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
