<template>
  <div>
    <section class="page">
      <div class="card card-form">
        <div class="card_body">
          <h3 class="text_center">Register</h3>
          <form @submit.prevent="onSubmit">
            <div class="form_group">
              <label for="email">Email:</label>
              <input
                id="email"
                class="form_control"
                type="text"
                v-model="email"
                placeholder="example@gmail.com"
              />
            </div>
            <div class="form_group">
              <label for="password">Password:</label>
              <input
                id="password"
                class="form_control"
                v-model="password"
                type="password"
                placeholder="Please enter password"
              />
            </div>
            <div class="form_group">
              <label for="re-password">Re-Password:</label>
              <input
                id="re-password"
                class="form_control"
                v-model="rePassword"
                type="password"
                placeholder="Please enter Re-password"
              />
            </div>
            <div class="form_froup">
              <button type="submit" class="btn btn_success btn-submit">Register</button>
            </div>
          </form>
          <div class="other text_center">
            <span>
              Have your account?
              <nuxt-link to="/login" tag="a">Login here</nuxt-link>
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  data() {
    return {
      email: '',
      password: '',
      rePassword: '',
    }
  },
  methods: {
    checkValidPassword() {
      return this.password === this.rePassword;
    },
    onSubmit() {
      const validPassword = this.checkValidPassword();
      if (validPassword) {
        this.$store.dispatch('authenticateUser', {
          email: this.email,
          password: this.password,
        }).then((result) => {
          if (result.success) this.$router.push('/decks')
        })
      }
      else {
        console.log('Password is not valid.');
      }
    }
  }
}
</script>
<style scoped>
.page {
  display: flex;
  justify-content: center;
  padding-top: 100px;
}

.page .card-form {
  width: 40%;
}

.btn-submit {
  width: 100%;
}
</style>
