let budgetValue = 0;
let totalExpensesValue = 0;

const expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

for (let i = 0; i < expenseEntries.length; i++) {
  totalExpensesValue += expenseEntries[i][1];
}

function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }
  return totalExpensesValue / expenseEntries.length;
}

function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

let balanceColor = "green";

function updateBalanceColor() {
  if (calculateBalance() < 0) {
    balanceColor = "red";
  } else if (calculateBalance() <= budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

function calculateCategoryExpenses(categoryName) {
  let totalCategoryValue = 0;

  for (let i = 0; i < expenseEntries.length; i++) {
    if (expenseEntries[i][0] === categoryName) {
      totalCategoryValue += expenseEntries[i][1];
    }
  }

  return totalCategoryValue;
}

function calculateLargestCategory() {
  const categories = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];
  const categoriesData = [];

  for (let i = 0; i < categories.length; i++) {
    const categoryName = categories[i];
    const total = calculateCategoryExpenses(categoryName);
    categoriesData.push([categoryName, total]);
  }

  let largestCategoryName = "";
  let largestAmount = 0;

  for (let i = 0; i < categoriesData.length; i++) {
    const currentCategory = categoriesData[i][0];
    const currentAmount = categoriesData[i][1];

    if (currentAmount > largestAmount) {
      largestAmount = currentAmount;
      largestCategoryName = currentCategory;
    }
  }

  return largestCategoryName;
}

function addExpenseEntry(newEntry) {
  expenseEntries.push(newEntry);

  totalExpensesValue += newEntry[1];
}
