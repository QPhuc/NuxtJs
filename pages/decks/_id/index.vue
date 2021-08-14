<template>
  <div>
    <h1>Your decks {{ $route.params.id }} is active</h1>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return /^[0-9]/.test(params.id);
  }
}
</script>
