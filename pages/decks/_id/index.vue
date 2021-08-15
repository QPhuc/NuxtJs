<template>
  <section>
    <div class="r">
      <div class="ct text_center">
        <h3>Deck- {{ $route.params.id }}: Learn English</h3>
        <div class="tools">
          <button class="btn btn_success">Start Now</button>
          <button class="btn btn_primary">Create a card</button>
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
  </section>
</template>

<script>
export default {
  validate({ params }) {
    return /^[0-9]/.test(params.id);
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
</style>
