<template>
  <section>
    <div class="r">
      <div class="ct text_center">
        <h3>Deck- {{ $route.params.id }}: Learn English</h3>
        <div class="tools">
          <button class="btn btn_success">Start Now</button>
          <button class="btn btn_primary" @click.prevent="openModal">Create a card</button>
        </div>
        <hr class="divide" />
        <div class="r">
          <div class="c_3">
            <div class="card">
              <div class="front-card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWli_l1zSfJtucNFLV78ENRXusVSMkHkPX6w&usqp=CAU"
                  alt="Thumbnail card"
                />
              </div>
              <div class="back-card">
                <h6>Shop</h6>
              </div>
            </div>
          </div>
          <div class="c_3">
            <div class="card">
              <div class="front-card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWli_l1zSfJtucNFLV78ENRXusVSMkHkPX6w&usqp=CAU"
                  alt="Thumbnail card"
                />
              </div>
              <div class="back-card">
                <h6>Shop</h6>
              </div>
            </div>
          </div>
          <div class="c_3">
            <div class="card">
              <div class="front-card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWli_l1zSfJtucNFLV78ENRXusVSMkHkPX6w&usqp=CAU"
                  alt="Thumbnail card"
                />
              </div>
              <div class="back-card">
                <h6>Shop</h6>
              </div>
            </div>
          </div>
          <div class="c_3">
            <div class="card">
              <div class="front-card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWli_l1zSfJtucNFLV78ENRXusVSMkHkPX6w&usqp=CAU"
                  alt="Thumbnail card"
                />
              </div>
              <div class="back-card">
                <h6>Shop</h6>
              </div>
            </div>
          </div>
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
export default {
  validate({ params }) {
    return /^[0-9]/.test(params.id);
  },
  methods: {
    openModal() {
      this.$modal.open({ name: 'CreateCardModal' })
    },
    closeModal() {
      this.$modal.close({ name: 'CreateCardModal' })
    }
  }
}
</script>

<style scoped>
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
</style>
