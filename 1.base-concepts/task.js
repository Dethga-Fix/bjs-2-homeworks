"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = b ** 2 - 4 * a * c;
  
  if (discriminant < 0) {
    return arr;
  }
  
  if (discriminant === 0) {
    arr.push(-b / (2 * a));
    return arr;
  }
  
  arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
  arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = parseFloat(percent);
  contribution = parseFloat(contribution);
  amount = parseFloat(amount);
  countMonths = parseInt(countMonths);
  
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  }
  
  const monthlyPercent = percent / 100 / 12;
  const loanBody = amount - contribution;
  
  if (loanBody <= 0) {
    return 0;
  }
  
  const monthlyPayment = loanBody * (monthlyPercent + monthlyPercent / ((1 + monthlyPercent) ** countMonths - 1));
  const totalAmount = monthlyPayment * countMonths;

  return Number(totalAmount.toFixed(2));
}