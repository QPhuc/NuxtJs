<template>
  <section>
    <div class="r">
      <div class="ct text_center">
        <h3>Deck: {{ deck.name }}</h3>
        <div class="tools">
          <button class="btn btn_success">Start Now</button>
          <button class="btn btn_primary" @click.prevent="openModal('DeckFormModal')">Create a card</button>
          <button class="btn btn_warning" @click.prevent="openModal('DeckFormModal')">Edit Deck</button>
        </div>
        <hr class="divide" />
        <div class="r">
          <CartList
            v-for="card in cards"
            :key="card._id"
            :keyword="card.keyword"
            :picture="card.picture"
          />
        </div>
      </div>
    </div>

    <!-- Modal -->
    <v-modal name="CreateCardModal">
      <div class="modal__body">
        <h1>Create a new Card</h1>
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
  </section>
</template>

<script>
import CartList from '@/components/Cards/CardList'
export default {
  components: { CartList },
  middleware: ['check-auth', 'auth'],
  asyncData(context) {
    return context.app.$axios
      .$get(`${process.env.baseApiUrl}/decks/${context.params.id}.json`)
      .then((data) => {
        return {
          deck: data
        }
      }).catch(e => {
        context.error(e)
      })
  },
  data() {
    return {
      cards: [
        {
          _id: 1,
          picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWli_l1zSfJtucNFLV78ENRXusVSMkHkPX6w&usqp=CAU',
          keyword: 'Shop'
        },
        {
          _id: 2,
          picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWli_l1zSfJtucNFLV78ENRXusVSMkHkPX6w&usqp=CAU',
          keyword: 'Shop'
        },
        {
          _id: 3,
          picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWli_l1zSfJtucNFLV78ENRXusVSMkHkPX6w&usqp=CAU',
          keyword: 'Shop'
        },
        {
          _id: 4,
          picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWli_l1zSfJtucNFLV78ENRXusVSMkHkPX6w&usqp=CAU',
          keyword: 'Shop'
        },
        {
          _id: 5,
          picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWli_l1zSfJtucNFLV78ENRXusVSMkHkPX6w&usqp=CAU',
          keyword: 'Shop'
        },
      ]
    }
  },
  // validate({ params }) {
  //   return /^[0-9]/.test(params.id);
  // },
  methods: {
    closeModal() {
      this.$modal.close({ name: 'CreateCardModal' })
    },
    openModal(name) {
      if (name === 'CreateCardModal') {
        this.$modal.open({ name: 'DeckFormModal' })
      } else if (name === 'DeckFormModal') {
        this.$modal.open({ name: 'DeckFormModal', payload: { ...this.deck, id: this.$route.params.id } })
      }
    },
  }
}
</script>

<style>
section {
  padding-top: 3rem;
}

section {
  padding-top: 3rem;
}

.divide {
  margin: 2rem 0;
}

.card {
  padding: 1rem;
}

.card img {
  width: 60%;
}

.modal__body {
  background-color: #fff;
  padding: 2rem;
}
