<template>
  <div>
    <error-alert v-if="error" />
    <h4 v-if="error">{{ error }}</h4>
    <section class="page">
      <div class="card card-form">
        <div class="card_body">
          <h3 class="text_center">Login</h3>
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
            <div class="form_froup">
              <button type="submit" class="btn btn_success btn-submit">Login</button>
            </div>
          </form>
          <div class="other text_center">
            <span>
              Have not your account?
              <nuxt-link to="/register" tag="a">Register here</nuxt-link>
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
      error: null,
    }
  },
  methods: {
    onSubmit() {
      this.error = null;
      // call api
      this.$axios.$post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.fbApiKey}`, {
        email: this.email,
        password: this.password,
        returnSecureToken: true,
      })
        .then(result => console.log(result))
        .then(this.$router.push('/settings'))
        .catch(e => this.error = e)
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
