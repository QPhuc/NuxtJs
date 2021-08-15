<template>
  <div class="header">
    <nav>
      <ul>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/decks">Decks</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/profile">Profile</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/settings">Setting</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.header {
  background-color: #000;
  color: #fff;
  height: 60px;
}

.header nav,
ul {
  height: inherit;
}

.header ul {
  align-items: center;
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

.header li {
  margin: 0 1.5rem;
}

.header a {
  color: #fff;
  text-decoration: none;
}

.header a:hover {
  text-decoration: underline;
}
</style>
