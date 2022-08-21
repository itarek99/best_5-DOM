const selectBtns = document.querySelectorAll('.select-btn');
const playerList = document.getElementById('player-list');
const playerCountElement = document.getElementById('player-count');
const playerPriceElement = document.getElementById('player-price');
const playerExpenseBtn = document.getElementById('btn-player-expense');
const totalExpenseBtn = document.getElementById('btn-total-expense');
const playerExpense = document.getElementById('player-expense');
const managerSalary = document.getElementById('manager-salary');
const coachSalary = document.getElementById('coach-salary');

let playerCount = 0;

selectBtns.forEach((selectBtn) => {
  selectBtn.addEventListener('click', () => {
    if (playerList.children.length >= 5) return alert('Maximum 5 Player Allowed :(');

    // Update Player Count for calculate player expense
    playerCount = playerList.children.length + 1;

    // Button Disabled Functionality
    selectBtn.classList.remove('bg-blue-600', 'hover:bg-blue-700');
    selectBtn.classList.add('btn-disabled');
    selectBtn.setAttribute('disabled', '');

    // Update Selected Player Count
    playerCountElement.innerText = playerList.children.length + 1;

    // Create Player Item
    const li = document.createElement('li');
    li.classList.add('mb-3');
    li.innerText = selectBtn.parentElement.children[0].innerText;
    playerList.appendChild(li);
  });
});

const positiveIntegerValidation = (value) => {
  if (parseInt(value) <= 0 || isNaN(parseInt(value))) {
    return true;
  }
  return false;
};

playerExpenseBtn.addEventListener('click', () => {
  if (positiveIntegerValidation(playerPriceElement.value)) {
    playerPriceElement.value = '';
    return alert('Please Input valid Number');
  }
  if (playerCount < 1) {
    return alert('Please Select Player :(');
  }

  playerExpense.innerText = playerPriceElement.value * playerCount;
  playerPriceElement.value = '';
});
