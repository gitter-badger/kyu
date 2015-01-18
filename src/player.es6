// A player should be able to join more than one game at a time. However,
// a player should NOT be able to "double play" any card.

/** 
 * A general player has cards and can join games.
 * @class
 */
export class Player {
	constructor() {
		this.cards = [];
	}
	// TODO
	join(game) {
		if (!this.canJoin(game))
			return console.log('Player cannot join game.');
		
		return { 
			with: hand => this.use(game, hand) 
		};
	}
	// TODO
	use(game, hand) {

	}
	canJoin(game) {
		return this.cards.length >= game.board.minHand;
	}
}