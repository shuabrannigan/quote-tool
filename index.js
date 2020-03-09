const speechbtn = document.getElementsByClassName("speech");
const setCostContainer = document.getElementById("setCost");
const editCostBtn = document.getElementById("editCost");

const tableBody = document.querySelector("tbody");
const printResult = document.querySelector(".result");
const printSMResult = document.querySelector(".smresult");
const form = document.querySelector("form");
let cost = 75;

setCostContainer.style.display = "none";


// Edit and Set Cost
function editCost() {
  if (setCostContainer.style.display === "none") {
    setCostContainer.style.display = "";
    editCostBtn.textContent = "Close";
  } else {
    setCostContainer.style.display = "none";
    editCostBtn.textContent = "Set Cost";
  }
}

function setCost() {
  cost = setCostContainer.childNodes[1].value;
  console.log(cost)
  setCostContainer.style.display = "none";
  editCostBtn.textContent = "Set Cost";
}

// Calculation for total cost

function calcMeterSquare(length, width, cost) {
  return length * width * cost;
}

// display buttons
function displayBtn() {
  // if (window.navigator.vendor === "Google Inc.") {
  if (window.navigator.vendor !== "010") {
    speechbtn[0].style.display = "none";
    speechbtn[1].style.display = "none";
    console.log("Voice recognition not compatible with your browser");
  } else {
    console.log("Voice recognition enabled");
  }
}
displayBtn();

// Create Table entry
form.addEventListener("submit", e => {
  e.preventDefault();
  const formData = new FormData(form);
  const length = formData.get("length");
  const width = formData.get("width");
  const id = new Date();

  const measurement = {
    length,
    width,
    id
  };

  const tr = document.createElement("tr");
  tr.setAttribute("class", "measurement");
  tr.setAttribute("id", measurement.id);

  const resultLength = document.createElement("td");
  resultLength.setAttribute("class", "count-length");
  resultLength.textContent = measurement.length;

  const resultWidth = document.createElement("td");
  resultWidth.setAttribute("class", "count-width");
  resultWidth.textContent = measurement.width;

  const Cost = document.createElement("td");
  Cost.setAttribute("class", "count-me");
  Cost.textContent = calcMeterSquare(
    measurement.length,
    measurement.width,
    cost
  ).toFixed(2);

  const delButtonTd = document.createElement("td");
  delButtonTd.setAttribute("class", "center-align")
  const delButton = document.createElement("button");
  delButton.textContent = "Delete";
  delButton.setAttribute("class", "del-button red btn");
  delButton.setAttribute("id", measurement.id);
  delButton.setAttribute("type", "submit");
  delButton.setAttribute("onclick", "deleteItem(id)");

  delButtonTd.appendChild(delButton);

  tr.appendChild(resultLength);
  tr.appendChild(resultWidth);
  tr.appendChild(Cost);
  tr.appendChild(delButtonTd);

  tableBody.appendChild(tr);

  form.reset();

  totalIs();
  totalSM();
  if (showDiv.style.display === "none") {
    showHide();
  }
});

function totalIs() {
  const tds = document.getElementsByClassName("count-me");
  let summed = 0;

  for (let i = 0; i < tds.length; i++) {
    summed += parseFloat(tds[i].innerHTML);
    // console.log(tds[i].innerHTML)
  }

  return (printResult.textContent = "$" + summed.toFixed(2));
}
totalIs();

// CALCULATE TOTAL SQUARE METERS REQUIRED

function totalSM() {
  const tdl = document.getElementsByClassName("count-length");
  const tdw = document.getElementsByClassName("count-width");
  let summed = 0;

  for (let i = 0; i < tdl.length; i++) {
    summed += parseFloat(tdl[i].innerHTML * tdw[i].innerHTML);
  }

  return (printSMResult.textContent = parseFloat(summed, 10).toFixed(2) + "m²");
}
totalSM();

function deleteItem(e) {
  const getItem = document.getElementById(e);
  // const id = getItem.id;
  getItem.remove();

  totalIs();
  totalSM();
}

function deleteAll() {
  alertbox.style.display = "";
}
