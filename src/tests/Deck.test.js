const { Deck, Cards } = require('../Entities/Deck');

// Create new deck for testing
const deck = new Deck();

test('has 52 cards', () => {
  expect(deck.cards.length).toBe(52);
});

test('should be able to give the cards requested (small)', () => {
  expect(deck.dispatchCards(2).length).toBe(2);
});

test('should be able to give the cards requested (big)', () => {
  expect(deck.dispatchCards(15).length).toBe(15);
});

test('should be able to give default card amount', () => {
  expect(deck.dispatchCards().length).toBe(2);
});

test('should be able to auto refill if cards are about to end', () => {
  deck.cards = ["J♠", "2♥"];
  expect(deck.dispatchCards(5).length).toBe(5);
});
