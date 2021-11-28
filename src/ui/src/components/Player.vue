<template>
  <div class="container">
    Player: {{ player.name }} <br/>
    Cards:
    <div>
      <Card 
        v-for="card in player.cards"
        :key="card.lastname"
        :card="card"
      />
    </div>
  </div>

</template>

<script>
import Card from './Card.vue'

export default {
  name: 'Player',
  components: {
    Card
  },
  props: {
      player: {
      type: Object      
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
