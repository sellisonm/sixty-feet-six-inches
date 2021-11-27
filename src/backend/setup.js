const card = require('./card')
const { shuffle } = require('./helper')
const player = require('./player')
const NodeCache = require( "node-cache" );
const playerCache = new NodeCache();

let setupGame = () => {

    // 1. Load Cards From JSON data
    let cards = card.loadCardsFromData()

    console.log('Cards: ')
    cards.forEach(c => { console.log(c) });

    // 2. Create Players
    let players = player.initPlayers(2)
    console.log('Players: ')    
    players.forEach(p => { 
        console.log(p) 
    });

    // 3. Deal random cards to Players
    let shuffledCards = shuffle(cards)
    let playerIndex = 0
    shuffledCards.forEach((c) => {
        players[playerIndex].addCard(c)
        playerIndex = playerIndex === 0 ? 1 : 0
    })

    players.forEach(p => { 
        console.log(p.name + "'s cards: ")
        p.cards.forEach(c => {
            console.log(c)
        })
     });

     playerCache.set('players', JSON.stringify(players))
}

let getPlayers = () => {
    return playerCache.get('players')
}

module.exports = {
    setupGame,
    getPlayers
}