// Функция для остановки игры и очистки интервала
function stopGame() {
  if (moveInterval) {
    clearInterval(moveInterval);
    moveInterval = null;
    console.log('Игра остановлена, интервал очищен');
  }
}

// Очищаем интервал при закрытии/перезагрузке страницы
window.addEventListener('beforeunload', stopGame);

// Также можно добавить кнопку для остановки игры
const stopButton = document.createElement('button');
stopButton.textContent = 'Остановить игру';
stopButton.style.position = 'fixed';
stopButton.style.top = '50px';
stopButton.style.right = '800px';
stopButton.addEventListener('click', stopGame);
document.body.appendChild(stopButton);

// Или добавить кнопку перезапуска
const restartButton = document.createElement('button');
restartButton.textContent = 'Перезапустить игру';
restartButton.style.position = 'fixed';
restartButton.style.top = '80px';
restartButton.style.right = '800px';
restartButton.addEventListener('click', () => {
  // Останавливаем текущий интервал
  stopGame();
  
  // Запускаем новый
  moveInterval = setInterval(moveCharacter, 1000);
  console.log('Игра перезапущена');
});
document.body.appendChild(restartButton);
