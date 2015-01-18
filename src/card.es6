/** 
 * Cards have four values and an optional type.
 * @class
 */
export class Card {
	constructor(values) {
		this.top = values.top;
		this.right = values.right;
		this.bottom = values.bottom;
		this.left = values.left;
	}
	static random() {
		return new Card({
			top: Math.round(Math.random() * 10) + 1,
			right: Math.round(Math.random() * 10) + 1,
			bottom: Math.round(Math.random() * 10) + 1,
			left: Math.round(Math.random() * 10) + 1
		});
	}
}