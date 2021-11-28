<template>
    <b-card>
  <b-card no-body class="overflow-hidden" style="max-width: 340px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-icon icon="person-bounding-box" style="width: 120px; height: 120px;"></b-icon>
      </b-col>
      <b-col md="6">
        <b-card-body v-bind:title="Name">
          <b-card-text>
            <p>Positions: {{ Positions }}</p>
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</b-card>
</template>

<script>
export default {
    name: "Card",
    props: {
      card: {
        type: Object      
      }
    },
    data: function() {
        return {
            Name: this.card.firstName + ' ' + this.card.lastName,
            Positions: this.card.positions.join(',')
        }
    },
    mounted() {
        console.log(this.card)
    }
}
</script>

<style scoped>

</style>