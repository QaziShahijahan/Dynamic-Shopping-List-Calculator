// Select elements from the DOM
const itemNameInput = document.getElementById("item-name-input");
const itemPriceInput = document.getElementById("item-price-input");
const addButton = document.getElementById("add-button");
const tableBody = document.getElementById("table-body");
const grandTotalRow = document.querySelector('[data-ns-test="grandTotal"]');

// Initialize grand total
let grandTotal = 0;

// Function to add item to the table
function addItem() {
  const itemName = itemNameInput.value.trim(); // Get the item name
  const itemPrice = parseFloat(itemPriceInput.value.trim()); // Get the item price

  // Validate input
  if (!itemName || isNaN(itemPrice) || itemPrice <= 0) {
    alert("Please enter a valid item name and price.");
    return;
  }

  // Create a new row for the table
  const newRow = document.createElement("tr");

  // Create item name cell
  const nameCell = document.createElement("td");
  nameCell.setAttribute("data-ns-test", "item-name");
  nameCell.textContent = itemName;

  // Create item price cell
  const priceCell = document.createElement("td");
  priceCell.setAttribute("data-ns-test", "item-price");
  priceCell.textContent = itemPrice.toFixed(2);

  // Append cells to the row
  newRow.appendChild(nameCell);
  newRow.appendChild(priceCell);

  // Insert the new row before the grand total row
  tableBody.insertBefore(newRow, grandTotalRow.parentElement);

  // Update the grand total
  grandTotal += itemPrice;
  grandTotalRow.textContent = `Grand Total: ${grandTotal.toFixed(2)}`;

  // Clear input fields
  itemNameInput.value = "";
  itemPriceInput.value = "";
}

// Add event listener to the button
addButton.addEventListener("click", addItem);
