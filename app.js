function updateCaseNumber(isIncreasing) {
  const caseInput = document.getElementById('case-number');
  let caseNumber = caseInput.value;
  if (isIncreasing == true) {
    caseInput.value = parseInt(caseNumber) + 1;
  } else if (caseNumber > 0) {
    caseInput.value = parseInt(caseNumber) - 1;
  }
  caseInput.value = caseNumber;
  // update case total
  const caseTotal = document.getElementById('case-total');
  caseTotal.innerText = caseNumber * 59;
}

document.getElementById('case-plus').addEventListener('click', function () {
  const caseInput = document.getElementById('case-number');
  updateCaseNumber(true);
  // const caseNumber = caseInput.value;
  // caseInput.value = parseInt(caseNumber) + 1;
});
document.getElementById('case-minus').addEventListener('click', function () {
  const caseInput = document.getElementById('case-number');
  updateCaseNumber(false);
  // const caseNumber = caseInput.value;
  // caseInput.value = parseInt(caseNumber) - 1;
});
