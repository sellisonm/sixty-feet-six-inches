<template>
  <div class="container">
    <b-button variant="primary" @click="startGame">Start Game</b-button>
  </div>

</template>

<script>
import SetupGame from '../services/game-start'

export default {
  name: 'Shell',
  methods: {
    startGame() {
      SetupGame.setupGame()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
