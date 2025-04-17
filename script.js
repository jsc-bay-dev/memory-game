const symbols = ['🍎','🍌','🍒','🍇','🍉','🍋','🍓','🍑'];
let cards = [...symbols, ...symbols]; // 8 pairs, 16 cards
const board = document.querySelector('.game-board');

let firstCard = null, secondCard = null, lockBoard = false;

function setupBoard() {
    board.innerHTML = '';
    
    cards.forEach(symbol => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.dataset.symbol = symbol;
      card.innerHTML = `
        <div class="front">${symbol}</div>
        <div class="back"></div>
      `;
      card.addEventListener('click', flipCard);
      board.appendChild(card);
    });
  }