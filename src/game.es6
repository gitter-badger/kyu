import { KyuBoard } from "./board.es6";

/** 
 * A game has two players and a Kyu board.
 * @class 
 */
export class Game {
	constructor(player1 = null, player2 = null) {
		this.player1 = player1;
		this.player2 = player2;
		this.board = new KyuBoard();
		this.isStarted = false;
		this.turn = null;
	}
	
	/** 
	 * Assigns the current turn and flags the game for start.
	 * @method start
	 * @argument {Number} [turn] - The first player's turn, either 0 or 1. If
	 * 	no value provided, picks at random. 
	 */
	start(turn = Date.now() % 2) {
		
		// verify that turn is valid
		if (turn !== 0 && turn !== 1)
			throw `Invalid turn ${turn} provided.`;

		this.turn = turn;
		this.isStarted = true;
	}
}