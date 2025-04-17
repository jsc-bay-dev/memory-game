const symbols = ['🍎','🍌','🍒','🍇','🍉','🍋','🍓','🍑'];
let cards = [...symbols, ...symbols]
const board = document.querySelector('.game-board');

let firstCard = null, secondCard = null, lockBoard = false;