<template>
  <div class="container">
    <b-button variant="primary" @click="startGame">Start Game</b-button>
    <br/>
    Players:
    <Player 
      v-for="player in players"
      :key="player.id"
      :player="player"
     />
  </div>

</template>

<script>
import SetupGame from '../services/game-start'
import Player from './Player.vue'

export default {
  name: 'Shell',
  components: {
    Player
  },
  data()  {
    return  {
        players: []
    }
  },
  methods: {
    async startGame() {
      SetupGame.setupGame()
      let playerArray = await SetupGame.getPlayers()

      playerArray.forEach(p => {
        this.players.push(p)
      });
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
