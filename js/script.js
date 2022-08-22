// this elements used multiple times
const selectBtns = document.querySelectorAll('.select-btn');
const playerList = document.getElementById('player-list');
const playerPriceElement = document.getElementById('player-price');
const playerExpense = document.getElementById('player-expense');
const managerSalary = document.getElementById('manager-salary');
const coachSalary = document.getElementById('coach-salary');
const activePlayerCount = document.getElementById('active-player-count');

// function for select element by Id
const elementById = (id) => {
  return document.getElementById(id);
};

// initialize player count for later use
let playerCount = 0;

// event handler for select player
selectBtns.forEach((selectBtn) => {
  selectBtn.addEventListener('click', () => {
    if (playerList.children.length >= 5) return alert('Maximum 5 Player Allowed :(');

    // Button Disabled Functionality
    selectBtn.classList.remove('bg-blue-600', 'hover:bg-blue-700');
    selectBtn.classList.add('btn-disabled');
    selectBtn.setAttribute('disabled', '');

    // Create Player Item and append to selected list
    const li = document.createElement('li');
    li.classList.add('mb-3');
    li.innerText = selectBtn.parentElement.children[0].innerText;
    playerList.appendChild(li);

    // Update Player Count for calculate player expense
    playerCount = playerList.children.length;

    // Update Selected Player Count
    elementById('player-count').innerText = playerList.children.length;
    elementById('selected-player-count').innerText = playerList.children.length;
  });
});

// check input value positive number or not
const inputValueValidation = (element) => {
  if (parseInt(element.value) <= 0 || isNaN(parseInt(element.value))) {
    return true;
  }
  return false;
};

// calculate selected player price
const calculatePlayerExpense = () => {
  playerExpense.innerText = (playerPriceElement.value * playerCount).toFixed(1);
};

// event handler for calculate selected player
elementById('btn-player-expense').addEventListener('click', () => {
  if (playerCount < 1) {
    return alert('Please Select Player :(');
  }

  if (inputValueValidation(playerPriceElement)) {
    activePlayerCount.innerText = '0';
    playerExpense.innerText = '0.0';

    elementById('total-expense').innerText = (
      parseFloat(playerExpense.innerText) +
      parseFloat(managerSalary.value) +
      parseFloat(coachSalary.value)
    ).toFixed(1);

    return alert('Please Input Valid Player Price');
  }
  activePlayerCount.innerText = playerList.children.length;
  calculatePlayerExpense();
});

// event handler for calculate total expense
elementById('btn-total-expense').addEventListener('click', () => {
  calculatePlayerExpense();

  if (inputValueValidation(managerSalary)) {
    elementById('total-expense').innerText = '0.0';
    return alert('Please Input Valid Manager Salary');
  }

  if (inputValueValidation(coachSalary)) {
    elementById('total-expense').innerText = '0.0';
    return alert('Please Input Valid Coach Salary');
  }

  activePlayerCount.innerText = playerList.children.length;
  elementById('total-expense').innerText = (
    parseFloat(playerExpense.innerText) +
    parseFloat(managerSalary.value) +
    parseFloat(coachSalary.value)
  ).toFixed(1);
});
