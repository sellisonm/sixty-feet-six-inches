const { v4: uuidv4 } = require('uuid');
const helper = require('./helper')

class Player {
    constructor(name) {
        this.id = uuidv4()
        this.name = name ? name : helper.nameGenerator(8)
    }
}


let initPlayers = (count) => {
    let players = []
    for(let i=0;i<count;i++) {
        players.push(new Player())
    }
    return players
}


module.exports = {
    initPlayers
}