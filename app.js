function updateProductNumber(product, price, isIncreasing) {
  const productInput = document.getElementById(product + '-number');
  let productNumber = productInput.value;
  if (isIncreasing == true) {
    productInput.value = parseInt(productNumber) + 1;
  } else if (productNumber > 0) {
    productInput.value = parseInt(productNumber) - 1;
  }
  productInput.value = productNumber;
  // update case total
  const productTotal = document.getElementById(product + '-total');
  productTotal.innerText = productNumber * price;
}
// phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', function () {
  updateProductNumber('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
  updateProductNumber('phone', 1219, false);
});
// handle case increase decrease event
document.getElementById('case-plus').addEventListener('click', function () {
  // const caseInput = document.getElementById('case-number');
  updateProductNumber('case', 59, true);
  // const caseNumber = caseInput.value;
  // caseInput.value = parseInt(caseNumber) + 1;
});
document.getElementById('case-minus').addEventListener('click', function () {
  // const caseInput = document.getElementById('case-number');
  updateProductNumber('case', 59, false);
  // const caseNumber = caseInput.value;
  // caseInput.value = parseInt(caseNumber) - 1;
});
