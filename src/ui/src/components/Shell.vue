``<template>
  <div class="container">
    <div class="StartButtonLeft">
      <b-button  variant="primary" @click="startGame">Start Game</b-button>
    </div>
    <br/>
    <div class="row">
      <div class="col-sm"
           v-for="player in players"
           :key="player.id"
      >
        <div class="playerDiv">
          <Player :player="player" />
        </div>
      </div>
    </div>
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
.StartButtonLeft {
  float: left;
}
</style>
