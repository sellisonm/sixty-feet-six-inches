<template>
  <div class="container">
    Name: {{ player.name }} <br/>
    Id: {{ player.id }} <br/>
    Cards:
    <ul id="array-rendering">
        <li v-for="card in player.cards" :key="card.name">
            {{ card.firstName }}
        </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'Player',
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
