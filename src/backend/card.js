const { v4: uuidv4 } = require('uuid');
const athletes = require('../data/athletes.json')


class Card {
    constructor(first, last, positions, nickname, rankings) {
        this.id = uuidv4()
        this.firstName = first,
        this.lastName = last,
        this.positions = positions,
        this.nickname = nickname
        this.rankings = rankings
    }
}

const loadCardsFromData = () => {

let cards = []

 for (const athlete in athletes) {
     if (Object.hasOwnProperty.call(athletes, athlete)) {
         const el = athletes[athlete];
         cards.push(new Card(el.first, el.last, el.positions, el.nickname, el.rankings))
     }
 }

 return cards  
}

module.exports = {
    loadCardsFromData
}