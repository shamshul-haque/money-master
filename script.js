// functional way
function calcBtn() {
  const income = getInput("income");
  const food = getInput("food");
  const rent = getInput("rent");
  const clothes = getInput("clothes");

  if (
    isNaN(income) ||
    isNaN(food) ||
    isNaN(rent) ||
    isNaN(clothes) ||
    income < 0 ||
    food < 0 ||
    rent < 0 ||
    clothes < 0
  ) {
    return alert("Please provide a positive value");
  }

  const expense = food + rent + clothes;
  setOutput("total-expense", expense);

  const balance = income - expense;
  setOutput("total-balance", balance);
}

// event handling way
const saveBtn = document.getElementById("save-btn");
saveBtn.addEventListener("click", function () {
  const totalExpense = getElementValue("total-expense");
  const totalBalance = getElementValue("total-balance");
  const megaTotal = totalExpense + totalBalance;

  const savings = getInput("savings");
  if (isNaN(savings) || savings < 0) {
    return alert("Please provide a positive value");
  }
  const saved = (savings * megaTotal) / 100;
  setOutput("total-saving", saved);

  const remainBalance = totalBalance - saved;
  setOutput("remain-balance", remainBalance);
});

// get input
function getInput(getId) {
  const input = document.getElementById(getId);
  const inputString = input.value;
  const inputValue = parseFloat(inputString);
  input.value = "";
  return inputValue;
}

// get total value
function getElementValue(elementId) {
  const element = document.getElementById(elementId);
  const elementString = element.innerText;
  const elementValue = parseFloat(elementString);
  return elementValue;
}

// set output
function setOutput(setId, value) {
  const total = document.getElementById(setId);
  total.innerText = value.toFixed(2);
}
