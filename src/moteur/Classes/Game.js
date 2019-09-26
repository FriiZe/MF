const { Properties } = require("./Properties.js");
const { Player } = require("./Player.js");
const { Board } = require("./Board.js");

class Game {
    constructor() {
        this.playerList = []
        this.board = null;
    }

    init(board, ...players) {
        this.board = board
        for (let player of players) {
            this.playerList.push(player)
        }
    }
}

module.exports = { Game };