// Получаем игровое поле
const gameField = document.getElementById('game-field');

// Создаем клетки 4x4
for (let i = 0; i < 16; i++) {
  const cell = document.createElement('div');
  cell.className = 'cell';
  cell.dataset.index = i;
  gameField.appendChild(cell);
}

// Создаем персонажа, используем 'img', а не путь к файлу
const character = document.createElement('img'); 

character.src = require('./goblin.png').default || require('./goblin.png');

character.alt = 'Character';
character.id = 'character';

// Функция для получения случайной клетки
function getRandomCell() {
  const allCells = document.querySelectorAll('.cell');
  return allCells[Math.floor(Math.random() * allCells.length)];
}

// Размещаем персонажа в случайной клетке при загрузке
let currentCell = getRandomCell();
currentCell.appendChild(character);

function moveCharacter() {
  const allCells = document.querySelectorAll('.cell');
  
  // Фильтруем все клетки, кроме текущей
  const emptyCells = [...allCells].filter(cell => cell !== currentCell);
  
  if (emptyCells.length > 0) {
    const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    
    // Перемещаем персонажа
    randomCell.appendChild(character);
    currentCell = randomCell;
  }
}

setInterval(moveCharacter, 1000);