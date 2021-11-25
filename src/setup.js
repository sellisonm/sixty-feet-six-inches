const card = require('./card')
const player = require('./player')

let setupGame = () => {

    // 1. Load Cards From JSON data
    let cards = card.loadCardsFromData()

    console.log('Cards: ')
    cards.forEach(c => { console.log(c) });

    // 2. Create Players
    let players = player.initPlayers(2)
    console.log('Players: ')    
    players.forEach(p => { console.log(p) });

}

module.exports = {
    setupGame
}