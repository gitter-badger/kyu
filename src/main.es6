require('6to5/polyfill');
import { Card } from './card.es6';
import { Game } from './game.es6';
import { Player } from './player.es6';

// create a new game 
let game = new Game();

// create players
let p1 = new Player(),
	p2 = new Player();

// generate hands
p1.cards = Array(5).map(() => {
	return Card.random();
});
p2.cards = Array(5).map(() => {
	return Card.random();
})

// select hands
let p1Hand = p1.cards.slice(0,5),
	p2Hand = p2.cards.slice(0,5);

// add players to the game
p1.join(game).with(p1Hand);
p2.join(game);
p2.use(p2Hand, game);

// start the game
game.start();
promptForNextPlay();

function promptForNextPlay() {
	
	// prompt for a play
	let player = game.turn;
	prompt('Player ${game.turn+1}\'s turn. Please play a card.')
		.then((card, location) => {
			
			// check if the user can make the play
			if (!player.canPlay(card))
				console.log('Invalid play.')

			// check if the play can be made on the board
			else if (!board.canPlay(card, location))
				console.log('Invalid play.');

			// make the play
			else 
				player.play(card).to(board, location);

			// if the game has ended
			if (game.ended) {

				// output the results
				if (game.winner)
					console.log('Player ${game.winner} has won.');
				else 
					console.log('Draw.');
			}

			else 
				promptForNextPlay();
		});
}

function prompt(message) {
	return new Promise(resolve => {
		console.log(message);
		setTimeout(() => {
			let card = Card.random(), // TODO placeholder
				location = [0,0]; // TODO placeholder
			resolve(card, location);
		}, 5000);
	});
}