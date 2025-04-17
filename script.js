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

  function flipCard() {
    if (this === firstCard) return;
    if (lockBoard) return;
    this.classList.add('flipped');
    if(!firstCard){ //if firstCard has not yet been defined yet...
        firstCard = this;
        return;
    }
    // if firstCard has already been defined...
    secondCard = this;
    lockBoard = true;
    checkForMatch();
  }

  function checkForMatch () {
    const isMatch = firstCard.dataset.symbol === secondCard.dataset.symbol;
    if (isMatch) {
        disableCards();
    } else {
        setTimeout(unflipCards, 1000);
    }
  }

  function disableCards() { // if match
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetQue();
  }

  function unflipCards () { // if not match
    firstCard.classList.remove('flipped');
    secondCard.classList.remove('flipped');
    resetQue();
  }

  function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
  }

  document.getElementById('restart').addEventListener('click', setupBoard);